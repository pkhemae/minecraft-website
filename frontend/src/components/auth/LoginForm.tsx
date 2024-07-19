import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);
  };

  return (
    <div className="max-w-md mx-auto bg-gray-100 p-8 rounded-lg shadow-md">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2" htmlFor="username">Pseudonyme</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-yellow-500"
            required
          />
        </div>
        <button type="submit" className="w-full bg-yellow-500 text-white p-3 rounded-lg font-bold hover:bg-yellow-600 transition duration-300">
          Connexion
        </button>
      </form>
    </div>
  );
};

export default LoginForm;