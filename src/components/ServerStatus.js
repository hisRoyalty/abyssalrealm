import React, { useEffect, useState } from 'react';
import Header from './Header';

const ServerStatus = () => {
  const [serverStatus, setServerStatus] = useState('loading');
  const [onlinePlayers, setOnlinePlayers] = useState('0');

  useEffect(() => {
    const fetchServerStatus = async () => {
      try {
        const response = await fetch('https://api.mcstatus.io/v2/status/java/play.abyssalrealm.tech:25592');
        const data = await response.json();

        if (data.online) {
          setServerStatus('online');
          setOnlinePlayers(data.players.online);
        } else {
          setServerStatus('offline');
        }
      } catch (error) {
        setServerStatus('error');
        console.error('Error fetching server status:', error);
      }
    };

    fetchServerStatus();
  }, []);

  return (
    <div>
      <Header />
    <div className="bg-gray-900 h-screen flex flex-col items-center justify-center">
      
      <h2 className="text-4xl font-bold text-white mb-8">Server Status</h2>
      {serverStatus === 'loading' && <p className="text-white">Loading server status...</p>}
      {serverStatus === 'online' && (
        <p className="text-green-500 font-semibold text-xl">
          The server is currently online. Online players: {onlinePlayers}
        </p>
      )}
      {serverStatus === 'offline' && (
        <p className="text-red-500 font-semibold text-xl">The server is currently offline.</p>
      )}
      {serverStatus === 'error' && (
        <p className="text-yellow-500 font-semibold text-xl">Failed to fetch server status.</p>
      )}
    </div>
    </div>
  );
};

export default ServerStatus;
