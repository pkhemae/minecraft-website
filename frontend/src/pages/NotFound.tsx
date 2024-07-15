import React from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <div>
            <Helmet>
                <title>{websiteName} | Erreur</title>
            </Helmet>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-center bg-white p-8 rounded-lg shadow-md">
                    <h1 className="text-6xl font-bold text-gray-800">404</h1>
                    <h2 className="text-2xl font-semibold text-gray-700 mt-4">Page non trouvée</h2>
                    <p className="text-gray-600 mt-2 mb-6">La page que vous cherchez n'a pas pu être trouvée.</p>
                    <button
                        onClick={handleHomeClick}
                        className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                    >
                        Accueil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;