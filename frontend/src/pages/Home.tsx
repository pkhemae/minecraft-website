import React from 'react';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold my-8">Home</h1>
      <div className="flex flex-col md:flex-row justify-around py-8 space-y-4 md:space-y-0 md:space-x-4 px-4">
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-5xl font-bold text-yellow-500">995</span>
          <p className="mt-4 text-lg font-medium text-gray-700">JOUEURS EN LIGNE</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-5xl font-bold text-yellow-500">+10000</span>
          <p className="mt-4 text-lg font-medium text-gray-700">JOUEURS UNIQUES</p>
        </div>
        <div className="flex-1 bg-gray-200 rounded-lg shadow-lg p-10 text-center border-solid border-2 border-gray-300">
          <span className="text-5xl font-bold text-yellow-500">2530</span>
          <p className="mt-4 text-lg font-medium text-gray-700">MEMBRES DISCORD</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
