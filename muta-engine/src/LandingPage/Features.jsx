import React from 'react';
import styled from 'styled-components';

const features = [
  { title: 'Polymorphic Code', description: 'Constantly mutates your software’s code in real-time, making it nearly impossible for hackers to reverse-engineer.' },
  { title: '360° Security', description: 'Multi-layered defense mechanisms to protect every part of your software—from code to data to transactions.' },
  { title: 'Web3 Integration', description: 'Fully compatible with decentralized applications, providing robust security for your blockchain projects.' },
];

const FeaturesSection = styled.section`
  background-color: #F3F4F6;
  padding: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 40px;
  color: #1F2937;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 15px;
    color: #1F2937;
  }

  p {
    color: #6B7280;
    line-height: 1.6;
  }
`;

const Features = () => {
  return (
    <FeaturesSection>
      <Container>
      
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </FeaturesSection>
  );
};

export default Features;
