import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50 py-16 text-center">
            <div className="container mx-auto px-6">
                {/* Ethereum Icon */}
                <div className="flex justify-center mb-6">
                    <img
                        src="/icon/main/ethereum.svg"
                        alt="Ethereum Icon"
                        className="w-32 h-32"
                    />
                </div>
                <h1 className="text-5xl font-bold text-gray-800 mb-4">Social Staking</h1>
                <p className="text-lg text-gray-600 mb-8">Stake with friends on Arbitrum</p>
                <p className="text-lg text-gray-600 mb-2">+2.5k members joined</p>
                {/* APR, TVL, Active Squads */}
                <div className="flex justify-center space-x-8 mb-10">
                    <div>
                        <span className="text-4xl font-bold text-blue-600">5.8%</span>
                        <p className="text-gray-500">APR</p>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-blue-600">$8.2M</span>
                        <p className="text-gray-500">TVL</p>
                    </div>
                    <div>
                        <span className="text-4xl font-bold text-blue-600">450+</span>
                        <p className="text-gray-500">Active Squads</p>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex justify-center space-x-4">
                <button className="bg-white text-blue-500 border-2 border-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
        Start Staking
    </button>
                    <button className="border-2 border-blue-500 text-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 hover:text-white transition">
                        Join Discord
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
