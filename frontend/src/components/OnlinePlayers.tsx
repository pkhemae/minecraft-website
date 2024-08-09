import React from 'react';
import useOnlinePlayers from '../hooks/useOnlinePlayers';

const OnlinePlayers: React.FC = () => {
  const serverAddress = import.meta.env.VITE_SERVER_IP;  
  const { onlinePlayers, error } = useOnlinePlayers(serverAddress);

  if (error) {
    return <span>Error: {error}</span>;
  }

  return (
    <span>
      {onlinePlayers !== null ? (
        <span>{onlinePlayers}</span>
      ) : (
        <span>0</span>
      )}
    </span>
  );
};

export default OnlinePlayers;
