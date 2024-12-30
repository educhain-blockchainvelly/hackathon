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
        return location.pathname === path ? "text-purple-500" : "text-gray-600 hover:text-purple-500";
    };

    return (
        <nav className="bg-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-bold">S</span>
                                </div>
                                <span className="text-xl font-bold">SyncFi</span>
                            </div>
                        </Link>
                    </div>


                    <div className="flex space-x-8">
                        <Link to="/dashboard" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/dashboard')}`}>
                            DASHBOARD
                        </Link>
                        <Link to="/swap" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/swap')}`}>
                            SWAP
                        </Link>
                        <Link to="/pool" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/pool')}`}>
                            POOL
                        </Link>
                        <Link to="/social" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/social')}`}>
                            SOCIAL
                        </Link>
                        <Link to="/leaderboard" className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${isActive('/leaderboard')}`}>
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