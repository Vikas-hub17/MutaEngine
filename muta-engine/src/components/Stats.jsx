import React from 'react';

const stats = [
  { label: 'ACTIVE USERS', value: '5000+' },
  { label: 'COMPANIES TRUSTING', value: '300+' },
  { label: 'TRANSACTIONS SECURED', value: '$500M+' },
];

const Stats = () => {
  return (
    <section className="py-16 bg-blue-500 text-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
