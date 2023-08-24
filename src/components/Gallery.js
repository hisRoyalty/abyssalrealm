import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const images = [
    {
      id: 1,
      title: 'Hub',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123488879803117609/2023-06-16_09.58.00.png?width=1282&height=662',
    },
    {
      id: 2,
      title: 'HogZog AI Faction',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123488913634365540/2023-06-27_22.40.02.png?width=1282&height=662',
    },
    {
      id: 3,
      title: 'Lincoln Sentinels',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123488984622977055/2023-06-27_22.36.26.png?width=1282&height=662',
    },
    {
      id: 4,
      title: 'Bank of Utopia',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123556728240349305/Bank_of_Utopia.png?width=1250&height=643',
    },
    {
      id: 5,
      title: 'Hogzog Hamlet',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123488901596708884/2023-06-27_22.40.43.png?width=1282&height=662',
    },
    {
      id: 6,
      title: 'Ironbat-Lincoln Border',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123488964117020792/2023-06-27_22.37.36.png?width=1282&height=662',
    },
    {
      id: 7,
      title: 'DarkEclipses\' Mansion',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123488973734555699/2023-06-27_22.36.49.png?width=1282&height=662',
    },
    {
      id: 8,
      title: 'TisMe\'s Statue',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123489079405858886/2023-06-27_22.36.40.png?width=1282&height=662',
    },
    {
      id: 9,
      title: 'Creeper Farm, Lincoln Sentinels',
      url: 'https://media.discordapp.net/attachments/1007148972214853753/1123489011097411624/2023-06-27_22.35.41.png?width=1282&height=662',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-white mb-6 ml-4">Gallery</h2>
        <div className="grid grid-cols-3 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="relative cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img src={image.url} alt={image.title} className="w-full h-64 object-cover rounded-lg" />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80">
            <div className="max-w-3xl mx-auto">
              <img
                src={selectedImage.url}
                alt={selectedImage.title}
                className="w-full h-auto max-h-full rounded-lg"
              />
              <p className="text-white text-lg font-semibold text-center mt-4">
                {selectedImage.title}
              </p>
              <button
                className="text-white text-lg font-semibold bg-gray-800 px-4 py-2 rounded mt-4"
                onClick={() => setSelectedImage(null)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Gallery;
