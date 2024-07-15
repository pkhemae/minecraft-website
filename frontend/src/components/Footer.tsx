import React from 'react';
import OnlinePlayers from './OnlinePlayers';

const Footer: React.FC = () => {
  const websiteName = import.meta.env.VITE_WEBSITE_NAME;
  const serverIP = import.meta.env.VITE_SERVER_IP;

  return (
    <footer>
      <div className="relative py-16 text-center bg-yellow-500 bg-opacity-90 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-cover before:bg-center before:opacity-40 before:bg-[url('https://www.baltana.com/files/wallpapers-28/Minecraft-Dungeons-Background-Wallpaper-85208.jpg')]">
        <p className="relative text-white text-xl font-bold">
          Rejoignez les <span className="inline"><OnlinePlayers /></span> joueurs connectés sur <span className="lowercase bg-yellow-500 py-1 px-3 rounded">{serverIP}</span> !
        </p>
      </div>
      <div className="bg-black text-white text-center py-4">
        <div className="text-lg">
          <span>
            Copyright © 2023 {websiteName} - Tous droits réservés |{' '}
            <a href="#" className="hover:underline text-yellow-300"> CGU</a>{' '} |{' '}
            <a href="#" className="hover:underline text-yellow-300"> CGV</a>{' '}| Propulsé par{' '}
            <a href="https://azuriom.com" className="hover:underline text-yellow-300"> {websiteName}</a>.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
