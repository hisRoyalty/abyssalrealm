import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TutorialComponent = () => {
  const Tutorial = [
    {
      title: 'Zogwarts',
      imageUrl: 'https://media.discordapp.net/attachments/1007148972214853753/1140601744485789846/image.png?width=1287&height=662',
      description: 'Learn more about the Zogwarts.',
      link: 'https://docs.google.com/document/d/1ZpxfQOvQCkEFG828-4UbadbHPhgrS6T-wtl3qVwSDBE/',
    },
    {
      title: 'Hamlet',
      imageUrl: 'https://media.discordapp.net/attachments/1007148972214853753/1123488901596708884/2023-06-27_22.40.43.png?width=1282&height=662',
      description: 'Learn more about the Hamlet.',
      link: 'https://docs.google.com/document/d/1m9h6GaV06KRO4qiPhdV9d1zt33IOAwxYwP6fZrzKlFg/',
    },
    {
      title: 'City Of Science',
      imageUrl: 'https://media.discordapp.net/attachments/1007148972214853753/1140603060704518174/image.png?width=1051&height=537',
      description: 'Learn more about the City of Science.',
      link: 'https://docs.google.com/document/d/1JAtj_uaeY3NCPZ3h0WltRg5qHejJMTu46Ha3GTpH3TI/',
    },
    {
      title: 'City Of Science',
      imageUrl: 'https://media.discordapp.net/attachments/1007148972214853753/1140603060704518174/image.png?width=1051&height=537',
      description: 'Learn more about the City of Science.',
      link: 'https://docs.google.com/document/d/1JAtj_uaeY3NCPZ3h0WltRg5qHejJMTu46Ha3GTpH3TI/',
    },
    {
      title: 'Tubian Remains',
      imageUrl: 'https://media.discordapp.net/attachments/1007148972214853753/1140603408722698270/image.png?width=1284&height=662',
      description: 'Learn more about the Tubian Remains.',
      link: 'https://docs.google.com/document/d/1cv0F2a-UA5vpOD_Yh1D5lJbwuvpxJmuToMa4xngCmHY/',
    },
    {
      title: 'Tubian Strays',
      imageUrl: 'https://media.discordapp.net/attachments/1007148972214853753/1140603711845048411/image.png?width=1161&height=603',
      description: 'Learn more about the Tubian Strays.',
      link: 'https://docs.google.com/document/d/12z-umiwXXg0fSQpGG1ivCuCTHmAeuFPXYAQJ7rB2gCA/',
    },
    {
      title: 'Economics',
      imageUrl: 'https://media.discordapp.net/attachments/1007148972214853753/1140618518056931368/image.png?width=1439&height=563',
      description: 'Learn more about the economics of the server.',
      link: 'https://docs.google.com/document/d/1mbb_BJlMNY12x6QsyHPZjBDP9hrF54ubkkN0y-nBfF0/',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <Header />
      <h2 className="text-4xl font-bold mb-4 text-center text-white mt-3 underline">Tutorials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-gray-900 p-4">
        {Tutorial.map((tutorial, index) => (
          <div key={index} className="rounded-lg shadow-lg p-6 bg-gray-800 h-full">
            <div className="flex items-center justify-center mb-4">
              <img
                src={tutorial.imageUrl}
                alt={`${tutorial.title}'s Image`}
                className="w-full h-40 object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold mb-2 text-yellow-300">{tutorial.title}</h3>
            <p className="text-white">{tutorial.description}</p>
            <a
              href={tutorial.link}
              className="text-blue-500 hover:underline mt-2 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Tutorial
            </a>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default TutorialComponent;
