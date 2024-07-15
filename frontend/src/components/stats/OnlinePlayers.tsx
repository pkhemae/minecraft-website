import React, { useState, useEffect } from 'react';

const OnlinePlayers: React.FC = () => {
  const [onlinePlayers, setOnlinePlayers] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const serverAddress = import.meta.env.VITE_SERVER_IP;  

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${serverAddress}`);
        if (!response.ok) {
          throw new Error('Failed to fetch server status');
        }
        const data = await response.json();
        if (data.online) {
          setOnlinePlayers(data.players.online);
        } else {
          setOnlinePlayers(0);
        }
      } catch (error) {
        setError('Could not fetch server status');
      }
    };

    fetchServerStatus();
  }, [serverAddress]);

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
