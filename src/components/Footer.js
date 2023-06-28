import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-4">
      <div className="container mx-auto text-center text-gray-300">
        <p>&copy; {new Date().getFullYear()} Abyssal Realm</p>
        
      </div>
    </footer>
  );
};

export default Footer;
