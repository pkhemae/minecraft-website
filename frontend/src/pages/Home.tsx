import React from 'react';
import Footer from '../components/Footer';
import OnlinePlayers from '../components/OnlinePlayers';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-8">Home</h1>
      <div className="flex flex-col md:flex-row justify-around py-8 space-y-4 md:space-y-0 md:space-x-4 px-4">
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500"><OnlinePlayers /></span> {/* TODO: Replace 'number' with an online players component*/}
          <p className="mt-4 text-md sm:text-lg md:text-xl font-medium text-gray-700">joueurs en ligne</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">number</span>
          <p className="mt-4 text-md sm:text-lg md:text-xl font-medium text-gray-700">text</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-3xl sm:text-4xl md:text-5xl font-bold text-yellow-500">number</span>
          <p className="mt-4 text-md sm:text-lg md:text-xl font-medium text-gray-700">text</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
