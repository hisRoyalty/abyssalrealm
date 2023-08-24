import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Factions = () => {
  const factions = [
    {
      name: 'Lincoln Sentinels',
      flag: 'https://media.discordapp.net/attachments/1007148972214853753/1123489774687227914/Bosu_Flag_cropped.png?width=662&height=662',
      about: '',
      leader: 'Gluonmaster',
      politicalParty: 'Progressive Party',
    },
    {
      name: 'Prospectors',
      flag: 'https://media.discordapp.net/attachments/1007148972214853753/1123515874427551854/image.png?width=120&height=120',
      about: '',
      leader: 'DarkEclipses',
      politicalParty: 'Prospector Party',
    },
    {
        name: 'Federation of Socialist States',
        flag: 'https://media.discordapp.net/attachments/1007148972214853753/1123515966316359731/image.png?width=114&height=114',
        about: '',
        leader: 'comrade_hisroyal',
        politicalParty: 'Workers\' Unity Party',
    },
    {
        name: 'Oωtia',
        flag: 'https://media.discordapp.net/attachments/1007148972214853753/1123515911513587792/image.png?width=121&height=121',
        about: '',
        leader: 'Wolferboi',
        politicalParty: 'Merchant\'s Guild',
    },
    {
        name: 'Wiglands',
        flag: 'https://media.discordapp.net/attachments/1007148972214853753/1123515994623721532/image.png?width=118&height=118',
        about: '',
        leader: 'wig0809',
        politicalParty: 'Unknown',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <h2 className="text-4xl font-bold mb-4 text-center text-white">Factions</h2>
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
            <p className="text-white mb-2">Leader: {faction.leader}</p>
            <p className="text-white mb-2">Political Party: {faction.politicalParty}</p>
            <p className="text-white">{faction.about}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    
  );
};

export default Factions;
