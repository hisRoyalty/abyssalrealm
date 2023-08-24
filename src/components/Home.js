import React, { useState } from 'react';
import Header from './Header';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { BiLogoDiscord } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';
import Footer from './Footer';

const Home = () => {
  const [isCopied, setIsCopied] = useState(false);
  const serverIP = 'play.abyssalrealm.tech:25592';

  const handleCopy = () => {
    navigator.clipboard.writeText(serverIP);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  const JoinButton = () => {
    return (
      <button
        className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-lg relative transition duration-300"
        onClick={handleCopy}
      >
        <span className="inline-flex items-center">
          Join Now
        </span>
        <span className="absolute left-0 right-0 text-center text-xs text-gray-300 top-full mt-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
          <FileCopyIcon className="h-4 w-4 mr-1 text-gray-300" />
          {isCopied ? 'IP Copied!' : 'Click to copy'}
        </span>
      </button>
    );
  };

  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div className="absolute top-20 left-6 flex items-center">
          <a href="https://discord.gg/5peHJGauS4" target="_blank" rel="noopener noreferrer">
            <BiLogoDiscord className="h-6 w-6 text-white mr-2" />
          </a>
          <a href="https://www.youtube.com/@gluonmaster1113" target="_blank" rel="noopener noreferrer">
            <BsYoutube className="h-6 w-6 text-white" />
          </a>
        </div>
        <h1 className="text-4xl font-bold text-white mt-16">Abyssal Realm</h1>
        <p className="text-lg text-gray-400 mb-8 mt-8">
          Experience and immerse yourself into the world of nations, politics, and wars.
        </p>
        <div className="flex justify-center">
          <div className="group">
            <JoinButton />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
