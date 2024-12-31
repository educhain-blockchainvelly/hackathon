// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LiquidityPool is Ownable {
    
    IERC20 public token;
    uint256 public totalLiquidity;
    address[] public users;

  
    mapping(address => uint256) public userLiquidity;

    
    mapping(address => address[]) public userGroups; 
    mapping(address => uint256) public groupLiquidity; 
    mapping(address => uint256) public groupParticipants; 
    mapping(address => mapping(address => bool)) public isUserInGroup; 

    
    uint256 public feeRate = 30; 
    uint256 public totalFeesCollected;


    IERC20 public rewardToken;
    uint256 public totalRewardPool;

    
    event LiquidityAdded(address indexed user, uint256 amount);
    event LiquidityRemoved(address indexed user, uint256 amount);
    event RewardsDistributed(uint256 totalRewardAmount);

    constructor(IERC20 _token, IERC20 _rewardToken) {
        token = _token;
        rewardToken = _rewardToken;
    }

    
    function addLiquidity(uint256 amount, address[] memory group) external {
        require(amount > 0, "Amount should be greater than 0");

        if (userLiquidity[msg.sender] == 0) {
            users.push(msg.sender);
        }

        for (uint256 i = 0; i < group.length; i++) {
            require(!isUserInGroup[group[i]][msg.sender], "User already in group");
            isUserInGroup[group[i]][msg.sender] = true;
            groupLiquidity[group[i]] += amount / group.length; 
            groupParticipants[group[i]]++;
        }

        userGroups[msg.sender] = group;
        token.transferFrom(msg.sender, address(this), amount);

        userLiquidity[msg.sender] += amount;
        totalLiquidity += amount;

        emit LiquidityAdded(msg.sender, amount);
    }


    function removeLiquidity(uint256 amount) external {
        require(userLiquidity[msg.sender] >= amount, "Insufficient liquidity");

        token.transfer(msg.sender, amount);

        userLiquidity[msg.sender] -= amount;
        totalLiquidity -= amount;

        if (userLiquidity[msg.sender] == 0) {
            for (uint256 i = 0; i < users.length; i++) {
                if (users[i] == msg.sender) {
                    users[i] = users[users.length - 1];
                    users.pop();
                    break;
                }
            }
        }

        address[] memory group = userGroups[msg.sender];
        for (uint256 i = 0; i < group.length; i++) {
            if (isUserInGroup[group[i]][msg.sender]) {
                groupLiquidity[group[i]] -= amount / group.length;
                groupParticipants[group[i]]--;
                isUserInGroup[group[i]][msg.sender] = false;
            }
        }

        emit LiquidityRemoved(msg.sender, amount);
    }

    
    function collectFees(uint256 transactionAmount) external onlyOwner {
        uint256 fee = (transactionAmount * feeRate) / 10000;
        totalFeesCollected += fee;
        token.transferFrom(msg.sender, address(this), fee);
    }

    
    function distributeRewards() external onlyOwner {
        require(totalLiquidity > 0, "No liquidity in the pool");

        uint256 rewardAmount = totalFeesCollected;
        totalFeesCollected = 0;

        for (uint256 i = 0; i < users.length; i++) {
            address user = users[i];
            if (userLiquidity[user] > 0) {
                uint256 userShare = (userLiquidity[user] * 1e18) / totalLiquidity;
                uint256 userReward = (rewardAmount * userShare) / 1e18;
                rewardToken.transfer(user, userReward);
            }
        }

        emit RewardsDistributed(rewardAmount);
    }


    function getGroupLiquidity(address group) external view returns (uint256) {
        return groupLiquidity[group];
    }

  
    function calculateReward(address user) public view returns (uint256) {
        uint256 userShare = (userLiquidity[user] * 1e18) / totalLiquidity;
        return (totalFeesCollected * userShare) / 1e18;
    }
}
