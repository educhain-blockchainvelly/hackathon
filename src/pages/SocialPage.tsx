import React from 'react';

const SocialPage = () => {
    const rankings = [
        { rank: '#1', user: 'Tez', syncfimon: '🦊', inventory: '30.343 ETH' },
        { rank: '#2', user: 'Nicholas', syncfimon: '🐻', inventory: '29.138 ETH' },
        { rank: '#3', user: 'cullinan', syncfimon: '🐶', inventory: '27.801 ETH' },
        { rank: '#4', user: 'XuanzhenZ', syncfimon: '🐼', inventory: '26.79 ETH' },
        { rank: '#5', user: 'muaddibb', syncfimon: '🐝', inventory: '20.89 ETH' },
        { rank: '#6', user: 'wei', syncfimon: '🐷', inventory: '20.276 ETH' },
        { rank: '#7', user: 'micho', syncfimon: '🐶', inventory: '19.801 ETH' },
        { rank: '#8', user: 'ronaldo', syncfimon: '🐼', inventory: '16.79 ETH' },
        { rank: '#9', user: 'kim', syncfimon: '🐝', inventory: '10.89 ETH' },
        { rank: '#10', user: 'Lee', syncfimon: '🐷', inventory: '0.276 ETH' },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">Social & Leaderboard</h1>
            <div className="min-h-screen text-white flex items-start justify-between">
                <div className="flex w-full p-6 gap-6">
                    <div className="w-1/4 h-[400px] bg-stone-100 p-4 rounded-md shadow-lg">
                        <div className="bg-white flex justify-between rounded-lg mb-4 p-3">
                            <span className="text-fuchsia-900">MY RANK</span>
                            <span className="text-fuchsia-900">-</span>
                        </div>
                        <div className="bg-white flex justify-between rounded-lg mb-4 p-3">
                            <span className="text-fuchsia-900">MY INVENTORY</span>
                            <span className="text-fuchsia-900">-</span>
                        </div>
                        <div className="bg-white flex justify-between rounded-lg mb-4 p-3">
                            <span className="text-fuchsia-900">MY FRIENDS</span>
                            <span className="text-fuchsia-900">-</span>
                        </div>
                        <div className="bg-white flex justify-between rounded-lg mb-4 p-3">
                            <span className="text-fuchsia-900">MY GROUP</span>
                            <span className="text-fuchsia-900">-</span>
                        </div>
                        <button className="w-full bg-fuchsia-600 text-white py-2 mt-16 rounded-2xl hover:bg-fuchsia-800 transition duration-300">
                            Sign In
                        </button>
                    </div>

                    <div className="w-3/4 bg-stone-100 p-4 rounded-md">
                        <div className="relative mb-4">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                🔍
                            </span>
                            <input
                                type="text"
                                placeholder="Search users"
                                className="w-full p-3 pl-10 rounded-2xl bg-white text-gray-400 border-2"
                            />
                        </div>

                        <div className="rounded-lg overflow-hidden">
                            <table className="w-full text-center border-separate border-spacing-y-4">
                                <thead>
                                    <tr className="bg-white text-fuchsia-600 border-2">
                                        <th className="py-3 px-4 rounded-l-lg">RANK</th>
                                        <th className="py-3 px-4">USER</th>
                                        <th className="py-3 px-4">SYNCFIMON</th>
                                        <th className="py-3 px-4 rounded-r-lg">INVENTORY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rankings.map((item, index) => {
                                        let rankStyle = '';
                                        if (item.rank === '#1' || item.rank === '#2' || item.rank === '#3') {
                                            rankStyle = 'font-semibold bg-fuchsia-600 text-white w-12 p-1 rounded-2xl mx-auto';
                                        }

                                        return (
                                            <tr
                                                key={index}
                                                className="bg-white hover:bg-fuchsia-200 transition duration-200"
                                            >
                                                <td className={"py-4 px-4 text-black rounded-l-2xl"}>
                                                    <p className={`${rankStyle}`}>{item.rank}</p>
                                                </td>
                                                <td className="py-4 px-4 text-black">{item.user}</td>
                                                <td className="py-4 px-4 text-2xl text-black">{item.syncfimon}</td>
                                                <td className="py-4 px-4 text-black rounded-r-2xl">{item.inventory}</td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SocialPage;