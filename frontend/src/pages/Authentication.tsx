import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../context/AuthContext';

const Authentication: React.FC = () => {
  const websiteName = import.meta.env.VITE_WEBSITE_NAME;
  const { user } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);

  return (
    <div>
      <Helmet>
        <title>{websiteName} | Connexion</title>
      </Helmet>
      <HeroSection />
      <div className="bg-gray-200 py-8 px-4 md:px-0">
        <div className="container mx-auto">
          <LoginForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Authentication;
