import { useState, useEffect } from 'react';

const useOnlinePlayers = (serverAddress: string) => {
  const [onlinePlayers, setOnlinePlayers] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  return { onlinePlayers, error };
};

export default useOnlinePlayers;