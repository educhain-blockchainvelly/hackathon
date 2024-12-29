import React from 'react';

interface FeatureCardProps {
    iconPath: string; 
    title: string; 
    description: string; 
    status: 'Not Started' | 'In Progress' | 'Done';
}

const FeatureCard: React.FC<FeatureCardProps> = ({ iconPath, title, description, status }) => {
    const statusColors: Record<string, string> = {
        'Not Started' : 'text-red-400', 'In Progress' : 'text-green-400', 'Done' : 'text-blue-400',
    };
    return (
        <div className="bg-purple-300 rounded-lg p-6 flex flex-col items-center justify-center shadow-md w-[300px] h-[230px]">
            <img src={iconPath} alt={`${title} Icon`} className="w-8 h-8 mb-4" />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white">{description}</p>
            <div className="px-4 py-1 mt-4 transition bg-white rounded-full bg-opacity-10 hover:bg-white">
                <span className = {`text-xs ${statusColors[status]}`}>Status: {status}</span>
            </div>
        </div>
    );
};

export default FeatureCard;
