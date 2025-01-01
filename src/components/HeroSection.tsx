const HeroSection = () => {
  return (
    <section className=" py-24">
      <div className="text-center px-4">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
            <svg className="w-12 h-12 text-purple-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 1.75L5.75 12.25L12 16L18.25 12.25L12 1.75Z M12 16L5.75 12.25L12 22.25L18.25 12.25L12 16Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-6xl font-bold text-purple-700 mb-6">
          Social Staking
        </h1>

        <p className="text-xl text-white mb-4">
          Stake with friends on Arbitrum
        </p>

        <p className="text-purple-200 mb-12 flex items-center justify-center gap-2">
          <span className="w-2 h-2 bg-green-400 rounded-full"></span>
          +2,500 members joined
        </p>

        {/* Stats Section */}
        <div className="flex justify-center gap-16 mb-12">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              155%
            </div>
            <div className="text-purple-200 mt-2">APR</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              $5M
            </div>
            <div className="text-purple-200 mt-2">TVL</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-8 py-6">
            <div className="text-5xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              100+
            </div>
            <div className="text-purple-200 mt-2">Active Squads</div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-6">
          <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg 
                      hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200
                      shadow-lg hover:shadow-xl">
            Start Staking
          </button>

          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg
                      hover:bg-white/10 transform hover:-translate-y-0.5 transition-all duration-200">
            Join Discord
          </button>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;