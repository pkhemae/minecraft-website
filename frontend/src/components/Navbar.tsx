import React from 'react';
import OnlinePlayers from './stats/OnlinePlayers';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '../context/AuthContext';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
  const { user, logout } = useAuth();
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <div>
      {/* Top nav */}
      <div className="nav-top bg-black bg-opacity-40 text-white py-2">
        <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
          <div className="flex items-center md:ml-40">
            <i className="bi bi-person-fill mr-2"></i>
            <span><span className="font-extrabold"><OnlinePlayers /></span> joueurs <span className="font-bold">en ligne</span></span>
          </div>
          <div className="flex items-center md:mr-40">
            {user ? (
              <a href="" onClick={logout} className="flex items-center space-x-2">
                <i className="bi bi-box-arrow-right"></i>
                <span className="font-extrabold">Déconnexion</span>
              </a>
            ) : (
              <a href="/login" className="flex items-center space-x-2">
                <i className="bi bi-box-arrow-in-right"></i>
                <span className="font-extrabold">Connexion</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Bottom nav */}
      <div className="nav-bottom bg-black bg-opacity-40 text-white py-4 md:py-4">
        <div className="container mx-auto flex flex-wrap justify-center space-x-4 md:space-x-6">
          <a href="/" className={`uppercase flex items-center space-x-2 text-sm md:text-lg font-extrabold hover:bg-black hover:bg-opacity-20 hover:rounded-lg px-2 py-1 md:px-4 md:py-2 ${isActive('/')}`}>
            <i className="bi bi-house-door-fill"></i>
            <span>Accueil</span>
          </a>
          <a href="/vote" className={`uppercase flex items-center space-x-2 text-sm md:text-lg font-extrabold hover:bg-black hover:bg-opacity-20 hover:rounded-lg px-2 py-1 md:px-4 md:py-2 ${isActive('/vote')}`}>
            <i className="bi bi-gift-fill"></i>
            <span>Vote</span>
          </a>
          <a href="/shop" className={`uppercase flex items-center space-x-2 text-sm md:text-lg font-extrabold hover:bg-black hover:bg-opacity-20 hover:rounded-lg px-2 py-1 md:px-4 md:py-2 ${isActive('/shop')}`}>
            <i className="bi bi-cart-fill"></i>
            <span>Boutique</span>
          </a>
          <a href="https://discord.test.net" className={`bg-blue-600 rounded-lg uppercase flex items-center space-x-2 text-sm md:text-lg font-extrabold hover:bg-blue-700 px-2 py-1 md:px-4 md:py-2 ${isActive('/discord')}`}>
            <i className="bi bi-discord"></i>
            <span>Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
