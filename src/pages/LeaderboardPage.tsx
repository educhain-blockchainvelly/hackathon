import React from 'react';

const LeaderboardPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex p-10">
  {/* 왼쪽 섹션 */}
  <div className="bg-gray-100 rounded-lg shadow-md p-6 flex flex-col h-80 w-1/4 space-y-6">
    <div className="bg-white text-purple-600 py-2 px-6 h-[72px] rounded-2xl shadow-sm w-full text-left flex flex-row items-center">
      MY RANK
    </div>
    <div className="bg-white text-purple-600 py-2 px-6 h-[72px] rounded-2xl shadow-sm w-full text-left flex flex-row items-center">
      SOCIAL TVL
    </div>
    <div className="bg-white text-purple-600 py-2 px-6 h-[72px] rounded-2xl shadow-sm w-full text-left flex flex-row items-center">
      MY TVL
    </div>
    <div className="bg-purple-600 text-white py-2 px-4 rounded-full shadow-sm w-full text-center">
      Sign In
    </div>
  </div>

  {/* 오른쪽 섹션 */}
  <div className="flex-grow ml-10">
    <table className="w-full text-left border-collapse">
      <thead>
        <tr className="text-purple-600 font-semibold border-b">
          <th className="p-4">RANK</th>
          <th className="p-4">USER</th>
          <th className="p-4">SOCIAL</th>
          <th className="p-4">TVL</th>
        </tr>
      </thead>
      <tbody>
        {[
          { rank: "#1", user: "Tez", tvl: "30.343 ETH" },
          { rank: "#2", user: "Nicholas", tvl: "29.136 ETH" },
          { rank: "#3", user: "cullinan", tvl: "27.801 ETH" },
          { rank: "#4", user: "XuanzhenZ", tvl: "26.79 ETH" },
          { rank: "#5", user: "muaddibb", tvl: "20.89 ETH" },
          { rank: "#6", user: "wei", tvl: "20.276 ETH" },
          { rank: "#7", user: "0xIxy", tvl: "19.903 ETH" },
          { rank: "#8", user: "algorithm", tvl: "14.463 ETH" },
        ].map((row, index) => (
          <tr key={index} className="border-b">
            <td className="p-4">{index < 3 ? <span className="bg-purple-100 text-purple-600 rounded-full px-3 py-1">{row.rank}</span> : <span>{row.rank}</span>}</td>
            <td className="p-4">{row.user}</td>
            <td className="p-4"></td>
            <td className="p-4">{row.tvl}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

    );
};

export default LeaderboardPage;