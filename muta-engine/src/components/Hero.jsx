import React from 'react';

const Hero = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-blue-100 text-center relative">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/path-to-hero-image.jpg)' }}></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-dark mb-4">Ready to Secure Your Software?</h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Get started with MutaEngine today and protect your software with the most advanced security technology.
        </p>
        <a href="#get-started" className="bg-primary text-white px-6 py-3 rounded-full text-lg hover:bg-blue-600 transition duration-300">
          Start Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
