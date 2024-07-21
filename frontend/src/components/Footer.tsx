import React, { useState } from 'react';
import OnlinePlayers from './stats/OnlinePlayers';

const Footer: React.FC = () => {
  const websiteName = import.meta.env.VITE_WEBSITE_NAME;
  const serverIP = import.meta.env.VITE_SERVER_IP;

  const [copied, setCopied] = useState(false);

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(serverIP).then(() => {
      console.log('IP address copied to clipboard');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }).catch(err => {
      console.error('Error copying to clipboard:', err);
    });
  };

  return (
    <footer>
      <div className="relative text-center bg-prussianblue">
        <div className="bg-lapislazuli bg-opacity-90 container mx-auto relative py-14 px-4 md:px-0 rounded-t-xl shadow-lg before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:bg-center before:opacity-40 before:bg-[url('https://images7.alphacoders.com/110/1100122.jpg')] before:rounded-t-xl">
          <p className="relative text-white text-xl font-bold">
            Rejoignez les <span className="inline"><OnlinePlayers /></span> joueurs connectés sur <span className="hover:cursor-pointer hover:border-gray-300 lowercase bg-yellow-500 py-1 px-3 rounded border-b-2" onClick={handleCopyToClipboard}>
              {copied ? 'Adresse copiée' : serverIP}
            </span> !
          </p>
        </div>
      </div>
      <div className="bg-prussianblue text-white text-center pb-6">
        <div className="bg-lapislazuli container mx-auto py-4 px-4 md:px-0 rounded-b-xl">
          <span className="text-lg">
            Copyright © 2023 {websiteName} - Tous droits réservés |{' '}
            <a href="#" className="hover:underline text-yellow-300"> CGU</a>{' '} |{' '}
            <a href="#" className="hover:underline text-yellow-300"> CGV</a>{' '}| Propulsé par{' '}
            <a className="hover:underline text-yellow-300"> {websiteName}</a>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
