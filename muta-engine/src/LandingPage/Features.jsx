import React from 'react';
import styled from 'styled-components';

// Styled Components
const FeaturesSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #00040F;
  color: white;
  padding: 50px;
  font-family: 'Arial', sans-serif;
`;

const FeaturesLeft = styled.div`
  text-align: left;
  margin-bottom: 50px;

  h1 {
    font-size: 36px;
    line-height: 1.2;
  }

  p {
    font-size: 18px;
    margin: 20px 0;
  }
`;

const GetStartedButton = styled.button`
  background-color: #00D4FF;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #00b3e6;
  }
`;

const FeaturesRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
`;

const FeatureIcon = styled.div`
  font-size: 40px;
`;

const FeatureText = styled.div`
  h3 {
    font-size: 24px;
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
  }
`;

const CTASection = styled.div`
  text-align: center;
  background-color: #282A36;
  padding: 30px;
  border-radius: 10px;
  margin-top: 50px;
  width: 100%;
  max-width: 800px;

  h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  p {
    font-size: 18px;
    margin-bottom: 30px;
  }
`;

const StartNowButton = styled.button`
  background-color: #00D4FF;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #00b3e6;
  }
`;

const Highlight = styled.span`
  color: #00D4FF;
`;

const Features = () => {
  return (
    <FeaturesSection>
      <FeaturesLeft>
        <h1>
          You Innovate, <br /> We <Highlight>Secure.</Highlight>
        </h1>
        <p>
          With MutaEngine, you can focus on creating cutting-edge software while we ensure it stays protected from threats.
          Our advanced technology keeps your intellectual property safe, allowing you to concentrate on what you do best.
        </p>
        <GetStartedButton>Get Started</GetStartedButton>
      </FeaturesLeft>

      <FeaturesRight>
        <FeatureItem>
          <FeatureIcon>
            {/* Star Icon - You can import an SVG or use any icon library */}
            <span role="img" aria-label="star">⭐</span>
          </FeatureIcon>
          <FeatureText>
            <h3>Polymorphic Code</h3>
            <p>
              MutaEngine constantly mutates your software’s code in real-time, making it nearly impossible for hackers to decompile or reverse-engineer.
            </p>
          </FeatureText>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            {/* Shield Icon */}
            <span role="img" aria-label="shield">🛡️</span>
          </FeatureIcon>
          <FeatureText>
            <h3>360° Security</h3>
            <p>
              Our multi-layered defense mechanisms ensure that every part of your software is protected, from code to data to user transactions.
            </p>
          </FeatureText>
        </FeatureItem>

        <FeatureItem>
          <FeatureIcon>
            {/* Web3 Icon */}
            <span role="img" aria-label="web3">🚀</span>
          </FeatureIcon>
          <FeatureText>
            <h3>Web3 Integration</h3>
            <p>
              Fully compatible with decentralized applications, MutaEngine provides robust security for your blockchain projects.
            </p>
          </FeatureText>
        </FeatureItem>
      </FeaturesRight>

      {/* Call to Action Section */}
      <CTASection>
        <h2>
          Ready to <Highlight>Secure</Highlight> Your Software?
        </h2>
        <p>
          Get started with MutaEngine today and protect your software with the most advanced security technology available.
        </p>
        <StartNowButton>Start Now</StartNowButton>
      </CTASection>
    </FeaturesSection>
  );
};

export default Features;
