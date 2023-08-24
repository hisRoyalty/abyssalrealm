import React, { useState, useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import factionsData from './data.json';

const AIFactions = () => {
  const [factions, setFactions] = useState([]);
  const [expandedFaction, setExpandedFaction] = useState(null);

  useEffect(() => {
    setFactions(factionsData);
  }, []);

  const toggleReadMore = (index) => {
    setExpandedFaction((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <h2 className="text-4xl font-bold mb-4 text-center text-white ai-factions-header whitespace-nowrap">
        AI Factions
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-900 p-4">
        {factions.map((faction, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 bg-gray-800 h-full">
            <div className="flex items-center justify-center mb-4">
              <img
                src={faction.flag}
                alt={`${faction.name}'s Flag`}
                className="w-24 h-24 rounded-full"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-yellow-300">{faction.name}</h3>
            {expandedFaction === index ? (
              <p className="text-white">{faction.about}</p>
            ) : (
              <p className="text-white">
                {faction.about.length > 100 ? `${faction.about.slice(0, 100)}...` : faction.about}
              </p>
            )}
            {faction.about.length > 100 && (
              <button
                className="text-yellow-300 mt-2"
                onClick={() => toggleReadMore(index)}
              >
                {expandedFaction === index ? 'Read Less' : 'Read More'}
              </button>
            )}
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default AIFactions;
