import React from 'react';

const features = [
  {
    title: 'Polymorphic Code',
    description: 'MutaEngine constantly mutates your software’s code in real-time, making it nearly impossible for hackers to decompile or reverse-engineer.',
  },
  {
    title: '360° Security',
    description: 'Our multi-layered defense mechanisms ensure that every part of your software is protected, from code to data to user transactions.',
  },
  {
    title: 'Web3 Integration',
    description: 'Fully compatible with decentralized applications, MutaEngine provides robust security for your blockchain projects.',
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">You Innovate, We Secure</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 shadow-md rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
