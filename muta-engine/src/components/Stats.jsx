import React from 'react';

const stats = [
  { value: '5000+', label: 'Active Users' },
  { value: '300+', label: 'Companies Trusting Us' },
  { value: '$500M+', label: 'Transactions Secured' },
];

const Stats = () => {
  return (
    <section id="stats" className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 text-center gap-8">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
