// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TokenSwap is Ownable {
  
    IERC20 public token1;
    IERC20 public token2;

  
    uint256 public feeRate = 30; 
    uint256 public totalFeesCollected;

   
    event SwapExecuted(address indexed user, address tokenIn, address tokenOut, uint256 amountIn, uint256 amountOut, uint256 fee);
    event FeeWithdrawn(uint256 amount);

    constructor(IERC20 _token1, IERC20 _token2) {
        token1 = _token1;
        token2 = _token2;
    }

  
    function swap(
        address tokenIn,
        address tokenOut,
        uint256 amountIn
    ) external {
        require(amountIn > 0, "Amount should be greater than 0");
        require(tokenIn == address(token1) || tokenIn == address(token2), "Invalid tokenIn address");
        require(tokenOut == address(token1) || tokenOut == address(token2), "Invalid tokenOut address");
        require(tokenIn != tokenOut, "Token in and out must be different");

        IERC20 inputToken = IERC20(tokenIn);
        IERC20 outputToken = IERC20(tokenOut);

        
        uint256 fee = (amountIn * feeRate) / 10000;
        uint256 amountOut = amountIn - fee;

   
        inputToken.transferFrom(msg.sender, address(this), amountIn);
        outputToken.transfer(msg.sender, amountOut);

       
        totalFeesCollected += fee;

        emit SwapExecuted(msg.sender, tokenIn, tokenOut, amountIn, amountOut, fee);
    }

    
    function withdrawFees(address to) external onlyOwner {
        require(totalFeesCollected > 0, "No fees collected");
        require(to != address(0), "Invalid address");

        uint256 amount = totalFeesCollected;
        totalFeesCollected = 0;

        token1.transfer(to, amount);

        emit FeeWithdrawn(amount);
    }

  
    function setFeeRate(uint256 newFeeRate) external onlyOwner {
        require(newFeeRate <= 1000, "Fee rate too high"); // 최대 10%
        feeRate = newFeeRate;
    }

 
    function getFeeRate() external view returns (uint256) {
        return feeRate;
    }
}
