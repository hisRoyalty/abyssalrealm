import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleModsDownload = () => {
    window.location.href = 'https://drive.google.com/uc?export=download&id=1lCZVnDEza89kgT8dBsJuoBlYbaBdPQgH';
  };

  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="https://media.discordapp.net/attachments/1007148972214853753/1122590456073691176/AbyssalRaiders.png?width=200&height=200" alt="Abyssal Realm Logo" className="ml-4 w-10 h-10 mr-2" />
          <div className="text-white font-bold text-xl">Abyssal Realm</div>
        </div>
        <nav className="ml-4 mr-12">
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-300 hover:text-white transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/staff" className="text-gray-300 hover:text-white transition duration-300">
                Staff
              </Link>
            </li>
            <li>
              <Link to="/status" className="text-gray-300 hover:text-white transition duration-300">
                Server Status
              </Link>
            </li>
            <li>
              <a href="https://docs.google.com/document/d/1thK9AjT0qfRjCKHE38NuIqWLoc4r8Cs9d1KWZK8n_5M/edit#bookmark=id.58bu5ok7br8e" className="text-gray-300 hover:text-white transition duration-300">
                Server Rules
              </a>
            </li>
            <li>
              <a onClick={handleModsDownload} className="text-gray-300 hover:text-white transition duration-300 cursor-pointer">
                Mods
              </a>
            </li>
            <li>
              <a href="/#/tutorial" className="text-gray-300 hover:text-white transition duration-300">
                Tutorials
              </a>
            </li>
            <li className="relative">
              <button
                className="text-gray-300 hover:text-white transition duration-300"
                onClick={toggleDropdown}
              >
                Others
                <ExpandMoreIcon />
              </button>
              {dropdownOpen && (
                <ul className="absolute mt-2 bg-gray-800 py-2 px-4 rounded-lg shadow">
                  <li>
                    <Link to="/factions" className="text-gray-300 hover:text-white transition duration-300">
                      Factions
                    </Link>
                  </li>
                  <li className="whitespace-nowrap">
                    <Link to="/aifactions" className="text-gray-300 hover:text-white transition duration-300">
                      AI Factions
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery" className="text-gray-300 hover:text-white transition duration-300">
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/map" className="text-gray-300 hover:text-white transition duration-300">
                      Map
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
