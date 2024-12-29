import React from 'react';
import FeatureCard from './FeatureCard';

interface Feature {
    iconPath: string;
    title: string;
    description: string;
    status: 'Not Started' | 'In Progress' | 'Done';
}

const MainFeatureSection: React.FC = () => {
    const features: Feature[] = [
        {
            iconPath: '/icon/main/social.svg',
            title: 'Defi',
            description: 'Defi section',
            status: 'Not Started',
        },
        {
            iconPath: '/icon/main/social.svg',
            title: 'Social',
            description: 'Social Section',
            status: 'In Progress',
        },
        {
            iconPath: '/icon/main/social.svg',
            title: 'Leaderboard',
            description: 'Leaderboard Section',
            status: 'Done',
        },
        {
            iconPath: '/icon/main/social.svg',
            title: 'Swap',
            description: 'Swap Section',
            status: 'In Progress',
        },
        {
            iconPath: '/icon/main/social.svg',
            title: 'Pool',
            description: 'Pool Section',
            status: 'Not Started',
        },
        {
            iconPath: '/icon/main/social.svg',
            title: 'Liquidity',
            description: 'Liquidity Section',
            status: 'Done',
        },
    ];

    return (
        <div className="py-16 bg-white">
            <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
                {features.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        iconPath={feature.iconPath}
                        title={feature.title}
                        description={feature.description}
                        status={feature.status}
                    />
                ))}
            </div>
        </div>
    );
};

export default MainFeatureSection;
