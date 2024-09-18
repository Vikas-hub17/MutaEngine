import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-50 h-screen flex flex
-col items-center justify-center text-center px-4">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold text-gray-800 mb-4">Ready to Secure Your Software?</h1>
        <p className="text-lg text-gray-600 mb-8">
          Get started with MutaEngine today and protect your software with the most advanced security technology available.
        </p>
        <a href="#get-started" className="bg-blue-500 text-white px-6 py-3 rounded-full text-lg">
          Start Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
