import React from 'react';
import styled from 'styled-components'; 
import heroGraphic from '../assests/HeroGraphic.png'; 

const HeroSection = styled.section`
  background: #00040F;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 20px;
  color: white;
  overflow: hidden;
  text-align: left;
  
  @media (min-width: 768px) {
    padding: 0 50px;
  }
`;

const HeroContent = styled.div`
  max-width: 600px;
  z-index: 2;
`;

const Tagline = styled.p`
  background-color: rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  border-radius: 50px;
  display: inline-block;
  font-size: 14px;
  color: #D1D5DB;
  margin-bottom: 20px;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
  color: #FFFFFF;
  
  span {
    color: #00D9FF; /* Teal for 'Dynamic Mutation' */
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const SubText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #A0AEC0;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.a`
  padding: 12px 30px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 50px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.primary {
    background-color: #00D9FF;
    color: #1A202C;
    
    &:hover {
      background-color: #00b9e6;
    }
  }

  &.secondary {
    background-color: #1A202C;
    border: 2px solid #00D9FF;
    color: #FFFFFF;
    
    &:hover {
      background-color: #111827;
    }
  }
`;

const HeroGraphic = styled.img`
  position: absolute;
  right: -50px;
  bottom: 0;
  width: 600px;
  height: auto;
  z-index: 1;

  @media (min-width: 768px) {
    right: -100px;
    width: 800px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <Tagline>Protecting Code, Preserving Innovation</Tagline>
        <Headline>
          Revolutionizing Software Security with <span>Dynamic Mutation</span>
        </Headline>
        <SubText>
          Introducing the Polymorphic Code Engine - A New Era in Protecting Your Software.
        </SubText>
        <ButtonContainer>
          <Button href="#learn-more" className="primary">Learn More</Button>
          <Button href="#start-now" className="secondary">Start Now</Button>
        </ButtonContainer>
      </HeroContent>
      <HeroGraphic src={heroGraphic} alt="Dynamic shape graphic" />
    </HeroSection>
  );
};

export default Hero;
