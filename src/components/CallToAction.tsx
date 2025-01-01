const CallToAction = () => {
    return (
        <section className=" py-20">
            <div className="text-center px-4">
                <h2 className="text-4xl font-bold text-white mb-6">
                    Start Your Journey Today
                </h2>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-12">
                    Join over 10,000+ users who are already earning passive income through our secure staking platform. Get started in minutes.
                </p>

                <div className="flex justify-center gap-6">
                    <button className="px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg 
                        hover:bg-gray-100 transform hover:-translate-y-0.5 transition-all duration-200
                        shadow-lg hover:shadow-xl">
                        Start Staking Now
                    </button>

                    <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg
                        hover:bg-white hover:text-purple-900 transform hover:-translate-y-0.5 transition-all duration-200">
                        View Rewards
                    </button>
                </div>

                {/* 보안 뱃지와 통계 */}
                <div className="mt-16 flex justify-center items-center gap-12 text-gray-300">
                    <div>
                        <div className="font-bold text-2xl text-white">$1B+</div>
                        <div className="text-sm">Total Staked</div>
                    </div>
                    <div className="h-8 w-px bg-gray-700"></div>
                    <div>
                        <div className="font-bold text-2xl text-white">155%</div>
                        <div className="text-sm">APY Returns</div>
                    </div>
                    <div className="h-8 w-px bg-gray-700"></div>
                    <div>
                        <div className="font-bold text-2xl text-white">10K+</div>
                        <div className="text-sm">Active Users</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToAction;