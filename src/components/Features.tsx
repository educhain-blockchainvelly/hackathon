import React from 'react';

const Features = () => {
    const features = [
        { title: "Group Staking", description: "Stake together with friends", color: "bg-blue-500" },
        { title: "Community Chat", description: "Connect with other stakers", color: "bg-blue-400" },
        { title: "Rewards Sharing", description: "Split rewards automatically", color: "bg-pink-500" },
    ];

    return (
        <section className="py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`p-6 text-white rounded-lg shadow-lg ${feature.color} flex flex-col items-center`}
                        >
                            <div className="text-xl font-bold">{feature.title}</div>
                            <p className="text-sm mt-2 text-center">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
