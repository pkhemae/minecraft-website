import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '../components/Footer';

const NotFound: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;

    return (
        <div>
            <Helmet>
                <title>{websiteName} | 404</title>
            </Helmet>
            <div>
                <h1>404 - Page not found</h1>
            <Footer />
            </div>
        </div>
    );
};

export default NotFound;