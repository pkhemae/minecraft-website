import React from 'react';

const Home: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;

    return (
        <div>
            <p className="text-red-500">bonjour</p>
        </div>
    );
};

export default Home;