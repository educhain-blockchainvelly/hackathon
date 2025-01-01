const Features = () => {
    const features = [
        {
            title: "Group Staking",
            description: "Join forces with friends and maximize your staking potential in a secure, collaborative environment",
            icon: (
                <svg className="w-10 h-10 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20Z" strokeWidth="1.5" />
                    <circle cx="12" cy="10" r="3" strokeWidth="1.5" />
                    <path d="M7 16C7 14.3431 9.23858 13 12 13C14.7614 13 17 14.3431 17 16" strokeWidth="1.5" />
                </svg>
            )
        },
        {
            title: "Community Chat",
            description: "Stay connected with your staking partners through our real-time communication platform",
            icon: (
                <svg className="w-10 h-10 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
        {
            title: "Rewards Sharing",
            description: "Automated and transparent reward distribution among all participants in your staking group",
            icon: (
                <svg className="w-10 h-10 text-purple-700" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M12 8V12L15 15M12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            )
        },
    ];

    return (
        <section className=" py-20">
            <div className="px-8">
                <div className="grid grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 
                                hover:bg-white/90 transform hover:-translate-y-1 transition-all duration-200
                                shadow-lg"
                        >
                            {/* Icon */}
                            <div className="bg-white rounded-xl p-4 inline-block mb-6 shadow-md">
                                {feature.icon}
                            </div>

                            {/* Content */}
                            <h3 className="text-2xl font-bold text-gray-800 mb-4">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;