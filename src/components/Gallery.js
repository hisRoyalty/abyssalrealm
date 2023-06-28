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
      title: 'Hub ',
      url: '/gallery/Hub.png',
    },
    {
      id: 2,
      title: 'HogZog AI Faction ',
      url: '/gallery/zoglins.png',
    },
    {
      id: 3,
      title: 'Lincoln Sentinels',
      url: '/gallery/lincoln.png',
    },
    {
      id: 4,
      title: 'Bank of Utopia',
      url: '/gallery/Bank of Utopia.png',
    },
    {
      id: 5,
      title: 'Hogzog Hamlet',
      url: '/gallery/HogZogHamlet.png',
    },
    {
      id: 6,
      title: 'Ironbat-Lincoln Border',
      url: '/gallery/IronbatLincoln.png',
    },
    {
      id: 7,
      title: 'DarkEclipses\' Mansion',
      url: '/gallery/Mansion.png',
    },
    {
      id: 8,
      title: 'TisMe\'s Statue',
      url: '/gallery/TisMe.png',
    },
    {
      id: 9,
      title: 'Creeper Farm, Lincoln Sentinels',
      url: '/gallery/CreeperFarm.png',
    },
  ];

  return (
    <div className="bg-gray-900 min-h-screen">
      <Header />
      <div className="container mx-auto py-8">
        <h2 className="text-4xl font-bold text-white mb-6">Gallery</h2>
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
    </div>
  );
};

export default Gallery;
