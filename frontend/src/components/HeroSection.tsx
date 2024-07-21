import React from 'react';
import Navbar from './Navbar';

const HeroSection: React.FC = () => {
    return (
        <div className="relative hero-section h-screen">
            <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-[url('https://images7.alphacoders.com/110/1100122.jpg')]">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-prussianblue via-[rgba(19,41,61,0.8)] to-[rgba(19,41,61,0.4)]">
                </div>
            </div>
            <div className="relative z-10">
                <Navbar />
                <div className="flex items-center justify-center h-full text-center">
                    <h1 className="text-4xl font-extrabold text-white">..</h1>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
