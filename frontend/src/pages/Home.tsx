import React from 'react';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;

    return (
        <div>
            <Helmet>
                <title>{websiteName} | Accueil</title>
            </Helmet>
            <p className="text-red-500">bonjour</p>
        </div>
    );
};

export default Home;