import React from 'react';
import HeroSection from '../components/HeroSection';
import Features from '../components/Features';
import Footer from '../components/Footer';
import CallToAction from '../components/CallToAction';
import MainFeatureSection from '../components/MainFeatureSection';

const MainPage = () => {
    return (
        <div className="container mx-auto p-4">
            {/* <h1 className="text-2xl font-bold">Main Page</h1> */}
            <HeroSection />
            <Features />
            <CallToAction />
            <MainFeatureSection />
            <Footer />
        </div>
    );
};

export default MainPage;