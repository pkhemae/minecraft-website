import React from 'react';
import siteIcon from '../assets/react.svg';

const websiteName = import.meta.env.VITE_WEBSITE_NAME || 'Server';

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-yellow-400 h-1"></div>

      <footer className="bg-gray-900 text-white pt-2">
        <div className="container mx-auto px-4 py-10">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="flex-1">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2 lg:w-1/3 text-left md:pr-4 mb-6 md:mb-0">
                  <h3 className="text-yellow-400 text-2xl md:text-4xl font-bold mb-4">A PROPOS</h3>
                  <p>
                    <span className="text-purple-400 font-bold">{websiteName}</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis amet sunt mollitia atque, nemo autem? Beatae totam maxime possimus quo minus consectetur at eos cum, minima excepturi laudantium harum velit!
                  </p>
                </div>

                <div className="w-full md:w-1/2 lg:w-1/3 text-left md:pl-4">
                  <h3 className="text-yellow-400 text-2xl md:text-4xl font-bold mb-4">LIENS UTILES</h3>
                  <ul className="text-xl md:text-2xl">
                    <li><a href="#" className="hover:text-purple-400 text-purple-700 font-extrabold">Nous rejoindre</a></li>
                    <li><a href="#" className="hover:text-purple-400 text-purple-700 font-extrabold ">Boutique</a></li>
                    <li><a href="#" className="hover:text-purple-400 text-purple-700 font-extrabold ">CGV / CGU</a></li>
                    <li><a href="#" className="hover:text-purple-400 text-purple-700 font-extrabold ">Mentions légales</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex-shrink-0 mx-auto md:mx-10 mt-6 md:mt-0">
              <img src={siteIcon} alt="Site Icon" className="footer-icon"/>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center items-center bg-gray-800 py-8">
          <p className="text-center text-sm">
            Réalisé avec ❤️ - © 2019-2022 {websiteName}. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
