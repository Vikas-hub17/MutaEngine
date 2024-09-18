import React from 'react';

const Header = () => {
  return (
    <header className="bg-white p-4 shadow-md fixed w-full top-0 z-10">
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">MutaEngine</div>
        <ul className="flex space-x-8 text-gray-700">
          <li><a href="#overview">Overview</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#login">Login</a></li>
          <li><a href="#signup" className="bg-blue-500 text-white px-4 py-2 rounded">Sign up</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
