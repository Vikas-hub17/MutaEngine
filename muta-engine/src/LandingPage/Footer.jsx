import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-8">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 MutaEngine. All rights reserved.</p>
        <div className="mt-4">
          <a href="#privacy" className="hover:underline">Privacy Policy</a> | 
          <a href="#terms" className="hover:underline"> Terms of Use</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
