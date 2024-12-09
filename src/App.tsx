import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import PoolPage from './pages/PoolPage';
import SwapPage from './pages/SwapPage';
import DashboardPage from './pages/DashboardPage';
import SocialPage from './pages/SocialPage';

function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <Navbar />
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="/dashboard" element={<DashboardPage />} />
                    <Route path="/swap" element={<SwapPage />} />
                    <Route path="/pool" element={<PoolPage />} />
                    <Route path="/social" element={<SocialPage />} />
                    <Route path="/leaderboard" element={<SocialPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;