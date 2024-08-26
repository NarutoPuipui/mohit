// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-screen text-white py-4 px-10 fixed bg-black">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          Mohit Singh
        </div>
        <ul className="flex space-x-4">
          <li><a href="#home" className="text-gray-300 hover:text-white">Home</a></li>
          <li><a target='blank' href="https://www.linkedin.com/in/mohit-singh-33a41a263?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-300 hover:text-white">LinkedIn</a></li>
          <li><span className="text-gray-300 hover:text-white">mohit02170@mail.com</span></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
