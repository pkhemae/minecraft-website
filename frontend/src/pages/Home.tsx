import React from 'react';
import Footer from '../components/Footer';
import OnlinePlayers from '../components/stats/OnlinePlayers';
import HighestPlayers from '../components/stats/HighestPlayers';
import AveragePlayers from '../components/stats/AveragePlayers';
import HeroSection from '../components/HeroSection';
import { Helmet } from 'react-helmet';

const Home: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;

  return (
    <div>
        <Helmet>
            <title>{websiteName} | Accueil</title>
        </Helmet>
      <HeroSection />
      <div className="flex flex-col md:flex-row justify-around py-8 space-y-4 md:space-y-0 md:space-x-4 px-4">
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500"><OnlinePlayers /></span>
          <p className="mt-4 text-md sm:text-lg md:text-xl font-medium text-gray-700">joueurs en ligne</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500"><HighestPlayers /></span> {/* TODO: Replace number span with players record */}
          <p className="mt-4 text-md sm:text-lg md:text-xl font-medium text-gray-700">joueurs au plus haut</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500"><AveragePlayers /></span> {/* TODO: Replace number span with average player number */}
          <p className="mt-4 text-md sm:text-lg md:text-xl font-medium text-gray-700">joueurs en moyenne</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;