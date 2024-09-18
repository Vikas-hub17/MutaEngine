import React from 'react';

const Header = () => {
  return (
    <header className="fixed w-full top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-lg font-bold text-primary">MutaEngine</div>
        <ul className="hidden md:flex space-x-6">
          <li><a href="#overview" className="text-dark hover:text-primary">Overview</a></li>
          <li><a href="#about" className="text-dark hover:text-primary">About Us</a></li>
          <li><a href="#features" className="text-dark hover:text-primary">Features</a></li>
          <li><a href="#contact" className="text-dark hover:text-primary">Contact</a></li>
        </ul>
        <div className="hidden md:flex space-x-4">
          <a href="#login" className="text-dark hover:text-primary">Login</a>
          <a href="#signup" className="bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-600">Sign up</a>
        </div>
        {/* Mobile Menu */}
        <div className="md:hidden">
          <button className="text-dark">Menu</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
