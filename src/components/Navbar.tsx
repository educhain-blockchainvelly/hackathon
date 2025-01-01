// Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ethers } from 'ethers';

interface NavbarProps {
    address: string | null;
    onConnect: () => Promise<void>;
}

const Navbar = ({ address, onConnect }: NavbarProps) => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path ? "text-purple-500 border-b-2 border-purple-500" : "text-gray-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500";
    };

    return (
        <nav className="bg-white/90 backdrop-blur-sm shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <span className="text-xl font-bold">SyncFi</span>
                            </div>
                        </Link>
                    </div>


                    <div className="flex space-x-8">
                        <Link to="/swap" className={`inline-flex items-center px-2 pt-1 text-lg ${isActive('/swap')}`}>
                            SWAP
                        </Link>
                        <Link to="/pool" className={`inline-flex items-center px-2 pt-1 text-lg  ${isActive('/pool')}`}>
                            POOL
                        </Link>
                        <Link to="/social" className={`inline-flex items-center px-2 pt-1 text-lg  ${isActive('/social')}`}>
                            SOCIAL
                        </Link>
                        <Link to="/leaderboard" className={`inline-flex items-center px-2 pt-1 text-lg  ${isActive('/leaderboard')}`}>
                            LEADERBOARD
                        </Link>
                    </div>


                    <div className="flex items-center">
                        {!address ? (
                            <button
                                onClick={onConnect}
                                className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors"
                            >
                                Sign in
                            </button>
                        ) : (
                            <button className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-colors">
                                {`${address.slice(0, 6)}...${address.slice(-4)}`}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;