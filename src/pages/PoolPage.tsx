import React from 'react';

const PoolPage = () => {
    const pools = [
        { name: 'USDC / EDU', apr: '~', balance1: '0.000USDC', balance2: '0.000EDU', icon: '🪙', status: 'Volatile', version: 'v2' },
        { name: 'SAI / USDC', apr: '~', balance1: '0.000SAIL', balance2: '0.000USDC', icon: '🪙', status: 'Volatile', version: 'v2' },
        { name: 'GRASP / EDU', apr: '~', balance1: '0.000GRASP', balance2: '0.000EDU', icon: '🪙', status: 'Volatile', version: 'v2' },
        { name: 'GRASP / USDC', apr: '~', balance1: '0.000GRASP', balance2: '0.000USDC', icon: '🪙', status: 'Volatile', version: 'v2' },
        { name: 'SAI / wSAI', apr: '~', balance1: '0.000SAI', balance2: '0.000wSAI', icon: '🪙', status: 'Volatile', version: 'v2' },
        { name: 'SAI / EDU', apr: '~', balance1: '0.000SAI', balance2: '0.000EDU', icon: '🪙', status: 'Volatile', version: 'v2' },
        { name: 'wSAI / EDU', apr: '~', balance1: '0.000wSAI', balance2: '0.000EDU', icon: '🪙', status: 'Volatile', version: 'v2' },
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50">
            {/* 페이지 제목 */}
            <h1 className="text-4xl font-bold text-purple-500 mb-6">Liquidity Pool</h1>

            {/* 제목 + 설명 + 버튼 */}
            <div className="flex flex-col lg:flex-row gap-8 items-stretch mb-8">
                {/* 설명 텍스트와 버튼 묶음 */}
                <div className="flex-1 bg-white shadow-md rounded-lg p-6 flex flex-col justify-between">
                    <p className="text-base leading-relaxed text-gray-700 mb-6">
                        Swaps with little slippage are made feasible by liquidity providers, or LPs. To
                        get SAI, stake and deposit liquidity.
                    </p>
                    <button className="bg-purple-500 text-white px-6 py-3 w-1/5 rounded-lg hover:bg-purple-600 transition">
                        Add Liquidity
                    </button>
                </div>

                {/* 설명 박스 */}
                <div className="w-full lg:w-1/3 bg-purple-50 p-6 rounded-lg shadow flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-gray-900 mb-4">
                        How Liquidity Pool works
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        A pool's slippage will decrease with increasing TVL (deeper liquidity).
                        LPs get SAIL emissions, and veSAIL lockers are rewarded with pool trade fees
                        in exchange for voting for the most lucrative pools.
                    </p>
                    <button className="bg-purple-500 text-white text-sm px-3 py-1 rounded-full hover:bg-purple-600 transition whitespace-nowrap inline-block !w-auto !h-auto">
                        Learn more
                    </button>
                </div>
            </div>

            {/* 테이블 섹션 */}
            <div className="flex-1">
                {/* 테이블 헤더 */}
                <div className="grid grid-cols-3 text-lg font-semibold bg-purple-100 text-purple-900 py-4 px-6 rounded-t-lg">
                    <span>LIQUIDITY POOL</span>
                    <span className="text-center">APR</span>
                    <span className="text-right">POOL BALANCE</span>
                </div>

                {/* 테이블 바디 */}
                <div className="bg-white shadow rounded-b-lg">
                    {pools.map((pool, index) => (
                        <div
                            key={index}
                            className={`grid grid-cols-3 items-center py-4 px-6 text-lg ${index % 2 === 0 ? 'bg-purple-50' : 'bg-white'
                                } border-b last:border-b-0`}
                        >
                            {/* 첫 번째 열: 아이콘, 이름, Volatile / v2 / 밸런스 */}
                            <div className="flex items-start space-x-3">
                                {/* Pool Icon */}
                                <div className="w-12 h-12 bg-purple-200 rounded-full flex items-center justify-center text-white text-2xl">
                                    {pool.icon}
                                </div>
                                <div>
                                    <div className="font-medium text-gray-900">{pool.name}</div>
                                    <div className="text-sm text-gray-700 flex items-center gap-2 mt-1 flex-wrap">
                                        <span className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full">{pool.status}</span>
                                        <span className="bg-purple-200 text-purple-900 px-2 py-0.5 rounded-full">{pool.version}</span>
                                        <span className="text-gray-800">{pool.apr}</span>
                                    </div>
                                </div>
                            </div>

                            {/* 두 번째 열: APR */}
                            <div className="text-center text-gray-700">{pool.apr}</div>

                            {/* 세 번째 열: POOL BALANCE (두 줄) */}
                            <div className="text-right text-gray-700">
                                <div>{pool.balance1}</div>
                                <div>{pool.balance2}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PoolPage;