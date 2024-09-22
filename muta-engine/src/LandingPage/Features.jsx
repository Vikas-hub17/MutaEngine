import React from 'react';
import styled from 'styled-components';
import { FaStar, FaShieldAlt, FaRocket } from 'react-icons/fa'; // Use FontAwesome for the icons.

const Section = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;

  @media (min-width: 768px) {
    padding: 80px;
  }
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 100px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const TextBlock = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;

    span {
      color: #00D9FF;
    }

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: #B0B3B8;
    font-size: 1.1rem;
    line-height: 1.8;
  }

  @media (min-width: 768px) {
    text-align: left;
  }
`;

const FeatureList = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  h3 {
    color: #FFFFFF;
    font-size: 1.4rem;
  }

  p {
    color: #B0B3B8;
    font-size: 1rem;
    line-height: 1.6;
  }
`;

const FeatureIcon = styled.div`
  background-color: #011027;
  padding: 10px;
  border-radius: 50%;
  font-size: 1.8rem;
  color: #00D9FF;
`;

const Button = styled.a`
 
  padding: 10px 30px;
  background-color: #00D9FF;
  color: #00040F;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 90px;
  
  &:hover {
    background-color: #00A7D1;
  }
`;

const Features = () => {
  return (
    <Section>
      <Wrapper>
        {/* Left text block */}
        <TextBlock>
          <h1>
            You Innovate, <span>We Secure</span>.
          </h1>
          <p>
            With MutaEngine, you can focus on creating cutting-edge software while we ensure it stays protected from threats. Our advanced technology keeps your intellectual property safe, allowing you to concentrate on what you do best.
          </p>
          <Button href="#">Get Started</Button>
        </TextBlock>

        {/* Right feature list */}
        <FeatureList>
          <FeatureItem>
            <FeatureIcon>
              <FaStar />
            </FeatureIcon>
            <div>
              <h3>Polymorphic Code</h3>
              <p>
                MutaEngine constantly mutates your software’s code in real-time, making it nearly impossible for hackers to decompile or reverse-engineer.
              </p>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FaShieldAlt />
            </FeatureIcon>
            <div>
              <h3>360° Security</h3>
              <p>
                Our multi-layered defense mechanisms ensure that every part of your software is protected, from code to data to user transactions.
              </p>
            </div>
          </FeatureItem>

          <FeatureItem>
            <FeatureIcon>
              <FaRocket />
            </FeatureIcon>
            <div>
              <h3>Web3 Integration</h3>
              <p>
                Fully compatible with decentralized applications, MutaEngine provides robust security for your blockchain projects.
              </p>
            </div>
          </FeatureItem>
        </FeatureList>
      </Wrapper>
    </Section>
  );
};

export default Features;
