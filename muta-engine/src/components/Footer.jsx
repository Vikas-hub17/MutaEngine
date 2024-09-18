import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© 2024 MutaEngine. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a href="#privacy" className="hover:underline">Privacy Policy</a>
          <a href="#terms" className="hover:underline">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
