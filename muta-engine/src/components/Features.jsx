import React from 'react';

const features = [
  { title: 'Polymorphic Code', description: 'Constantly mutates your software’s code in real-time, making it nearly impossible for hackers to reverse-engineer.' },
  { title: '360° Security', description: 'Multi-layered defense mechanisms to protect every part of your software—from code to data to transactions.' },
  { title: 'Web3 Integration', description: 'Fully compatible with decentralized applications, providing robust security for your blockchain projects.' },
];

const Features = () => {
  return (
    <section id="features" className="py-16 bg-lightGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-dark mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold text-dark mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
