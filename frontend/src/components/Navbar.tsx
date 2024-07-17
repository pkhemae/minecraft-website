import React from 'react';
import OnlinePlayers from './stats/OnlinePlayers';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      {/* Top navr */}
      <div className="nav-top bg-black bg-opacity-80 text-white py-2">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center ml-40">
            <i className="bi bi-person-fill mr-2"></i>
            <span><OnlinePlayers /> joueurs <span className="font-bold">en ligne</span></span>
          </div>
          <div className="flex items-center mr-40">
            {user ? (
              <a href="#" onClick={logout} className="flex items-center space-x-2">
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
      <div className="nav-bottom bg-black bg-opacity-80 text-white py-6">
        <div className="container mx-auto flex justify-center space-x-6">
          <a href="/" className="uppercase flex items-center space-x-2 text-lg font-extrabold hover:bg-black hover:bg-opacity-20 hover:rounded-lg px-4 py-2">
            <i className="bi bi-house-door-fill"></i>
            <span>Accueil</span>
          </a>
          <a href="/vote" className="uppercase flex items-center space-x-2 text-lg font-extrabold hover:bg-black hover:bg-opacity-20 hover:rounded-lg px-4 py-2">
            <i className="bi bi-gift-fill"></i>
            <span>Vote</span>
          </a>
          <a href="/shop" className="uppercase flex items-center space-x-2 text-lg font-extrabold hover:bg-black hover:bg-opacity-20 hover:rounded-lg px-4 py-2">
            <i className="bi bi-cart-fill"></i>
            <span>Boutique</span>
          </a>
          <a href="/discord" className="uppercase flex items-center space-x-2 text-lg font-extrabold hover:bg-black hover:bg-opacity-20 hover:rounded-lg px-4 py-2">
            <i className="bi bi-discord"></i>
            <span>Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
