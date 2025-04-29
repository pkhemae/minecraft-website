import React from 'react';

const NotFound: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;

    return (
        <div>
            <div>
                <p>404</p>
            </div>
        </div>
    );
};

export default NotFound;