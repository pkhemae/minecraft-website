import React from 'react';
import OnlinePlayers from './OnlinePlayers';

const Footer: React.FC = () => {

  const websiteName = import.meta.env.VITE_WEBSITE_NAME;

  return (
    <footer>
        {/* //TODO: CTA section */}
        <div className="cta-section">
            <p className="cta-text">Rejoignez les 100 joueurs connectés sur <span className="server-ip lowercase">play.test.net</span></p>
        </div>
        <div className="bg-black text-white text-center py-4">
            <div className="text-lg">
                <span>Copyright © 2023 {websiteName} - Tous droits réservés |{' '}<a href="#" className="hover:underline text-yellow-300"> CGU</a>{' '} |{' '} <a href="#" className="hover:underline text-yellow-300"> CGV</a>{' '}| Propulsé par{' '} <a href="https://azuriom.com" className="hover:underline text-yellow-300"> {websiteName}</a>.</span>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
