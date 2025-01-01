import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

declare global {
    interface Window {
        ethereum?: any;
    }
}

interface SwapPageProps {
    address: string | null;
    onConnect: () => Promise<void>;
}

const SwapPage: React.FC<SwapPageProps> = ({ address, onConnect }) => {

    const [weduBalance, setWeduBalance] = useState<string>('0');
    const [usdcBalance, setUsdcBalance] = useState<string>('0');
    const [inputAmount, setInputAmount] = useState<string>('');
    const [outputAmount, setOutputAmount] = useState<string>('');
    const [priceImpact, setPriceImpact] = useState<string>('0');
    const [minimumReceived, setMinimumReceived] = useState<string>('0');


    const SWAP_CONTRACT_ADDRESS = "YOUR_SWAP_CONTRACT_ADDRESS";
    const WEDU_TOKEN_ADDRESS = "YOUR_WEDU_TOKEN_ADDRESS";
    const USDC_TOKEN_ADDRESS = "YOUR_USDC_TOKEN_ADDRESS";


    const TOKEN_ABI = ['function balanceOf(address) view returns (uint256)'];


    const fetchBalances = async () => {
        if (address && window.ethereum) {
            try {
                const provider = new ethers.providers.Web3Provider(window.ethereum);
                const weduContract = new ethers.Contract(
                    WEDU_TOKEN_ADDRESS,
                    TOKEN_ABI,
                    provider
                );

                const usdcContract = new ethers.Contract(
                    USDC_TOKEN_ADDRESS,
                    TOKEN_ABI,
                    provider
                );

                const weduBal = await weduContract.balanceOf(address);
                const usdcBal = await usdcContract.balanceOf(address);

                setWeduBalance(ethers.utils.formatUnits(weduBal, 18));
                setUsdcBalance(ethers.utils.formatUnits(usdcBal, 6));
            } catch (error) {
                console.error("Error fetching balances:", error);
            }
        }
    };

    useEffect(() => {
        if (address) {
            fetchBalances();
        }
    }, [address]);


    const calculateSwap = async (amount: string) => {
        if (!amount || amount === '0') {
            setOutputAmount('0');
            return;
        }

        try {

            setOutputAmount(amount);
            setPriceImpact('1');
            setMinimumReceived(amount);
        } catch (error) {
            console.error("Error calculating swap:", error);
        }
    };


    const executeSwap = async () => {
        if (!inputAmount || inputAmount === '0' || !address) return;

        try {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();


            console.log("Swap executed");

            await fetchBalances();
        } catch (error) {
            console.error("Error executing swap:", error);
        }
    };


    const handleInputChange = (value: string) => {
        setInputAmount(value);
        calculateSwap(value);
    };

    return (
        <div className="flex justify-center items-center min-h-screen container mx-auto p-4">
            <div className="w-full max-w-xl h-[850px] bg-white rounded-3xl p-10">

                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-2xl font-semibold">Swap</h2>
                    {!address ? (
                        <button
                            onClick={onConnect}
                            className="bg-purple-500 text-white px-6 py-3 rounded-xl text-lg"
                        >
                            Connect Wallet
                        </button>
                    ) : (
                        <span className="text-base text-gray-600">
                            {`${address.slice(0, 6)}...${address.slice(-4)}`}
                        </span>
                    )}
                </div>


                <div className="bg-purple-400 rounded-xl p-8 mb-2">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-base text-white">You pay</span>
                        <div className="flex space-x-3">
                            <button
                                onClick={() => handleInputChange((Number(weduBalance) / 2).toString())}
                                className="bg-white/20 text-white text-base px-4 py-2 rounded-lg"
                            >
                                Half
                            </button>
                            <button
                                onClick={() => handleInputChange(weduBalance)}
                                className="bg-white/20 text-white text-base px-4 py-2 rounded-lg"
                            >
                                Max
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-purple-300 rounded-full"></div>
                            <select className="bg-transparent text-white text-xl border-none outline-none">
                                <option>WEDU</option>
                            </select>
                        </div>
                        <div className="text-white">
                            <input
                                type="text"
                                value={inputAmount}
                                onChange={(e) => handleInputChange(e.target.value)}
                                placeholder="0"
                                className="bg-transparent text-right w-full outline-none text-2xl"
                            />
                            <div className="text-base text-right mt-2">Balance: {weduBalance}</div>
                        </div>
                    </div>
                </div>


                <div className="bg-purple-400 rounded-xl p-8 mb-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-base text-white">You receive</span>
                    </div>
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
                            <select className="bg-transparent text-white text-xl border-none outline-none">
                                <option>USDC</option>
                            </select>
                        </div>
                        <div className="text-white">
                            <input
                                type="text"
                                value={outputAmount}
                                readOnly
                                placeholder="0"
                                className="bg-transparent text-right w-full outline-none text-2xl"
                            />
                            <div className="text-base text-right mt-2">Balance: {usdcBalance}</div>
                        </div>
                    </div>
                </div>


                <div className="space-y-1 mb-20 text-base">
                    <div className="flex justify-between mt-10">
                        <span>Exchange Rate</span>
                        <span>1 WEDU = 1 USDC</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Price Impact</span>
                        <span>{priceImpact}%</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Minimum Received</span>
                        <span>{minimumReceived} USDC</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Slippage</span>
                        <span>0.5%</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Fee</span>
                        <span>1 WEDU</span>
                    </div>
                </div>


                <button
                    onClick={executeSwap}
                    disabled={!address}
                    className="w-full bg-purple-500 text-white py-4 rounded-xl hover:bg-purple-600 transition-colors disabled:bg-purple-500 text-xl font-semibold"
                >
                    {address ? 'Swap' : ' Swap'}
                </button>
            </div>
        </div>
    );
};

export default SwapPage;