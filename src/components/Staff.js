import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Staff = () => {
  const staffMembers = [
    {
      name: 'Gluonmaster',
      role: 'Administrator, Chief Developer',
      profilePic: 'https://s.namemc.com/2d/skin/face.png?id=1389417257335029&scale=4',
    },
    {
      name: 'DarkEclipses',
      role: 'Administrator, Supervisor',
      profilePic: 'https://s.namemc.com/2d/skin/face.png?id=bb01cfdeb017051d&scale=4',
    },
    {
      name: 'comrade_hisroyal',
      role: 'Developer, Helper',
      profilePic: 'https://s.namemc.com/2d/skin/face.png?id=3579761cd859c7dd&scale=4',
    },
    {
      name: 'Open Staff Position',
      role: 'Have what it takes?',
      profilePic: 'https://s.namemc.com/2d/skin/face.png?id=282ed17da571e009&scale=4',
      about: (
        <a href="https://discord.gg/5peHJGauS4" className="text-white">
          Apply now!
        </a>
      ),
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <h2 className="text-4xl font-bold mb-4 text-center text-white">Staff</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-900">
        {staffMembers.map((staffMember, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 bg-gray-900 h-full">
            <div className="flex items-center justify-center">
              <img
                src={staffMember.profilePic}
                alt={`${staffMember.name}'s Profile`}
                className="w-24 h-24 rounded-full mb-4"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-yellow-300">{staffMember.name}</h3>
            <p className="text-white mb-4">{staffMember.role}</p>
            <p className="text-white">{staffMember.about}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Staff;
