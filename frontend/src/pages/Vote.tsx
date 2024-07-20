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
            <div className="bg-gray-200 py-8 px-4 md:px-0">
                <div className="container mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-700 text-center mb-4">Voter</h2>
                    
                    {/* Formulaire de vote */}
                    <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
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
                    
                    {/* Tableau de classement */}
                    <div className="bg-white p-6 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-700 mb-4">Classement</h3>
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-black text-white">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">#</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nom</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Récompense</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Votes</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#1</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Prend1Balle10</td>
                                    <td className="px-6 py-4 whitespace-nowrap">3000 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">627 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#2</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Araxyy</td>
                                    <td className="px-6 py-4 whitespace-nowrap">2000 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">598 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#3</td>
                                    <td className="px-6 py-4 whitespace-nowrap">The_Roxxeur</td>
                                    <td className="px-6 py-4 whitespace-nowrap">1500 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">583 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#4</td>
                                    <td className="px-6 py-4 whitespace-nowrap">INevius</td>
                                    <td className="px-6 py-4 whitespace-nowrap">1000 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">575 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#5</td>
                                    <td className="px-6 py-4 whitespace-nowrap">7amar</td>
                                    <td className="px-6 py-4 whitespace-nowrap">800 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">538 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#6</td>
                                    <td className="px-6 py-4 whitespace-nowrap">KyYna0</td>
                                    <td className="px-6 py-4 whitespace-nowrap">600 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">460 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#7</td>
                                    <td className="px-6 py-4 whitespace-nowrap">Qoubye</td>
                                    <td className="px-6 py-4 whitespace-nowrap">500 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">414 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#8</td>
                                    <td className="px-6 py-4 whitespace-nowrap">OLK1</td>
                                    <td className="px-6 py-4 whitespace-nowrap">300 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">386 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#9</td>
                                    <td className="px-6 py-4 whitespace-nowrap">The_Logiix</td>
                                    <td className="px-6 py-4 whitespace-nowrap">300 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">365 votes</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap">#10</td>
                                    <td className="px-6 py-4 whitespace-nowrap">NarilosTV</td>
                                    <td className="px-6 py-4 whitespace-nowrap">300 Crédits</td>
                                    <td className="px-6 py-4 whitespace-nowrap">328 votes</td>
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
