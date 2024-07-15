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
      <div>
        <div className="bottom-0 mt-[100px] ml-[-50%] h-[500px] w-[200%] rounded-t-[100%] bg-gray-300">
            <div className="mt-5 text-center text-2xl text-white">...</div>
        </div>
      </div>
            <Footer />
            </div>
        </div>
    );
};

export default NotFound;