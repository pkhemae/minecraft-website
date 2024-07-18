import React from 'react';
import Navbar from './Navbar';

const HeroSection: React.FC = () => {
    return (
        <div className="relative hero-section h-96 bg-black bg-opacity-80 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:bg-center before:opacity-40 before:bg-[url('https://images7.alphacoders.com/110/1100122.jpg')]">
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
