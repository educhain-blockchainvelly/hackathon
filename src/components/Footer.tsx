import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full py-4 text-gray-500 bg-gray-300 shadow-lg">
            <div className="flex items-center justify-between h-16 px-4">
                {/* 왼쪽 */}
                <div>
                    <p>&copy; 2024 SyncFi. All rights reserved.</p>
                </div>
                
                {/* 오른쪽 */}
                <div className="flex space-x-4">
                    <a href="/privacy" className="transition hover:text-gray-700">Privacy Policy</a>
                    <a href="/terms" className="transition hover:text-gray-700">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


