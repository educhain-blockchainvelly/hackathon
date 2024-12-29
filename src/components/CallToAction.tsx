import React from 'react';

const CallToAction = () => {
    return (
        <section className="bg-purple-100 py-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800">Ready to Start?</h2>
            <p className="text-gray-700 mt-4">
                Join thousands of users who are staking and earning with SyncFi.
            </p>
            <div className="mt-6">
                <button className="bg-purple-500 text-white px-8 py-3 rounded-lg hover:bg-purple-600 transition">
                    Start Staking Now
                </button>
            </div>
        </section>
    );
};

export default CallToAction;
