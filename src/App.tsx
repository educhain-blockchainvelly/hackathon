// App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ethers } from 'ethers';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import PoolPage from './pages/PoolPage';
import SwapPage from './pages/SwapPage';
import DashboardPage from './pages/DashboardPage';
import SocialPage from './pages/SocialPage';


declare global {
    interface Window {
        ethereum?: any;
    }
}

function App() {
    const [address, setAddress] = useState<string | null>(null);

    const connectWallet = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: 'eth_requestAccounts'
                });
                setAddress(accounts[0]);

                // Listen for account changes
                window.ethereum.on('accountsChanged', (accounts: string[]) => {
                    setAddress(accounts[0] || null);
                });

                // Listen for chain changes
                window.ethereum.on('chainChanged', () => {
                    window.location.reload();
                });

            } catch (error) {
                console.error("Error connecting wallet:", error);
            }
        } else {
            alert("Please install MetaMask!");
        }
    };

    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar address={address} onConnect={connectWallet} />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route
                        path="/swap"
                        element={<SwapPage address={address} onConnect={connectWallet} />}
                    />
                    <Route path="/pool" element={<PoolPage />} />
                    <Route path="/social" element={<SocialPage />} />
                    <Route path="/leaderboard" element={<SocialPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;