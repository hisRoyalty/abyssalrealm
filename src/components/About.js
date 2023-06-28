import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { BiLogoDiscord } from 'react-icons/bi';
import { BsYoutube } from 'react-icons/bs';

const About = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-8">About Abyssal Realm</h1>
          <p className="text-lg text-gray-400 mb-12">
            Welcome to Abyssal Realm. Dive into a world of nations, politics, and epic wars where your decisions shape the destiny of realms.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            Choose your path, establish alliances, and conquer enemies. Our community of passionate players ensures an engaging and dynamic environment for endless experiences.
          </p>
          <p className="text-lg text-gray-400 mb-12">
            With stunning mods with guns and vehicles, captivating AI factions, politics and wars, and a dedicated team of developers, Abyssal Realm delivers an unparalleled gaming experience. Join our thriving community today and embark on your journey to glory!
          </p>
          <div className="flex items-center justify-center">
            <a href="https://discord.gg/5peHJGauS4" target="_blank" rel="noopener noreferrer" className="mr-4">
              <BiLogoDiscord className="h-6 w-6 text-white" />
            </a>
            <a href="https://www.youtube.com/@gluonmaster1113" target="_blank" rel="noopener noreferrer">
              <BsYoutube className="h-6 w-6 text-white" />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
