import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';

const Vote: React.FC = () => {
    const websiteName = import.meta.env.VITE_WEBSITE_NAME;

    return (
        <div>
            <Helmet>
                <title>{websiteName} | Vote</title>
            </Helmet>
            <HeroSection />
            <div className="bg-prussianblue py-8 px-4 md:px-0">
                <div className="container mx-auto">
                    {/* vote container */}
                    <div className="bg-lapislazuli p-6 rounded-lg shadow-lg mb-8">
                    <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Voter</h3>
                        <form className="flex flex-col items-center">
                            <input 
                                type="text" 
                                placeholder="Nom" 
                                className="mb-4 p-2 border border-gray-300 rounded-lg w-full max-w-sm"
                            />
                            <button 
                                type="submit" 
                                className="bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg"
                            >
                                Continuer
                            </button>
                        </form>
                    </div>
                    
                    <div className="bg-lapislazuli p-6 rounded-lg shadow-lg overflow-x-auto">
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">Classement</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-prussianblue text-white">
                                <tr>
                                    <th scope="col" className="px-4 py-2 text-left text-sm md:text-lg tracking-wider font-bold">#</th>
                                    <th scope="col" className="px-4 py-2 text-left text-sm md:text-lg tracking-wider font-bold">Nom</th>
                                    <th scope="col" className="px-4 py-2 text-left text-sm md:text-lg tracking-wider font-bold">Récompense</th>
                                    <th scope="col" className="px-4 py-2 text-left text-sm md:text-lg tracking-wider font-bold">Votes</th>
                                </tr>
                            </thead>
                            <tbody className="bg-lapislazuli divide-y divide-gray-400">
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#1</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="Prend1Balle10" className="w-6 h-6 md:w-8 md:h-8 mr-2"/>
                                            <span className="text-sm md:text-lg text-white">Prend1Balle10</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">3000 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">627 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#2</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="Araxyy" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">Araxyy</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">2000 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">598 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#3</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="The_Roxxeur" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">The_Roxxeur</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">1500 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">583 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#4</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="INevius" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">INevius</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">1000 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">575 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#5</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="7amar" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">7amar</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">800 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">538 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#6</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="KyYna0" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">KyYna0</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">600 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">460 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#7</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="Qoubye" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">Qoubye</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">500 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">414 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#8</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="OLK1" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">OLK1</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">300 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">386 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#9</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="The_Logiix" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">The_Logiix</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">300 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">365 votes</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-yellow-400 text-sm md:text-lg text-black font-bold py-1 px-2 md:px-3">#10</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <img src="https://via.placeholder.com/30" alt="NarilosTV" className="w-6 h-6 md:w-8 md:h-8  mr-2"/>
                                            <span className="text-sm md:text-lg text-white">NarilosTV</span>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="bg-gray-200 text-sm md:text-lg text-black py-1 px-2 md:px-3 rounded-md">300 Crédits</span>
                                    </td>
                                    <td className="px-4 py-2 whitespace-nowrap">
                                        <span className="text-sm md:text-lg font-bold text-white">328 votes</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Vote;