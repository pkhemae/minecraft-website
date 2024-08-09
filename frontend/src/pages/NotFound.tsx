import React from 'react';
import { Helmet } from 'react-helmet';

const NotFound: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;

    return (
        <div>
            <Helmet>
                <title>{websiteName} | 404</title>
            </Helmet>
            <div>
                <p>404</p>
            </div>
        </div>
    );
};

export default NotFound;