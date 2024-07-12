import React from 'react';

const Footer: React.FC = () => {

  const websiteName = import.meta.env.VITE_WEBSITE_NAME;  

  return (
    <footer className="bg-black text-white text-center py-4">
        <div className="text-lg">
            <span>
            Copyright © 2023 {websiteName} - Tous droits réservés. |{' '}
            <a href="#" className="hover:underline text-yellow-300">
                CGU
            </a>{' '}
            |{' '}
            <a href="#" className="hover:underline text-yellow-300">
                CGV
            </a>{' '}
            | Propulsé par{' '}
            <a href="https://azuriom.com" className="hover:underline text-yellow-300">
                {websiteName}
            </a>
            .
            </span>
        </div>
    </footer>
  );
};

export default Footer;
