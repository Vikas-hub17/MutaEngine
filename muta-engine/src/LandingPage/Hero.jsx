import React from 'react';
import styled from 'styled-components';
import HeroImg from '../assests/Hero.png';

// Styled Components
const HeroSection = styled.section`
  background-color: #00040F;
  color: white;
  padding: 100px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextContent = styled.div`
  max-width: 600px;
  margin-left: 20px;
  margin-top: -80px;
`;

const Tagline = styled.div`
  background-color: transparent;
  color: white;
  border: 1px solid #00D4FF;
  padding: 5px 15px;
  border-radius: 5px;
  display: inline-block;
  font-size: 14px;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  font-size: 48px;
  line-height: 1.2;
  margin-bottom: 20px;

  span {
    color: #00D4FF;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button`
  border: 2px solid #00D4FF;
  padding: 12px 30px;
  border-radius: 15px;
  background-color: ${(props) => (props.primary ? '#00D4FF' : 'transparent')};
  color: ${(props) => (props.primary ? '#00040F' : '#FFFFFF')};
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#00b3e6' : '#00D4FF')};
    color: ${(props) => (props.primary ? '#00040F' : '#00040F')};
  }
`;

const ImageContent = styled.div`
  width: 100%;
  margin-top: -80px;

  img {
    max-width: 100%;
    height: auto;
    margin-left: 200px;
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <TextContent>
        <Tagline>Protecting Code, Preserving Innovation</Tagline>
        <Heading>
          Revolutionizing <br></br> Software Security with <span>Dynamic Mutation</span>
        </Heading>
        <SubText>
          Introducing the Polymorphic Code Engine - A New Era in Protecting Your Software.
        </SubText>
        <ButtonGroup>
          <Button primary>Learn More</Button>
          <Button>Start Now</Button>
        </ButtonGroup>
      </TextContent>
      
      <ImageContent>
        <img src={HeroImg} alt="Dynamic Mutation" />
      </ImageContent>
    </HeroSection>
  );
};

export default Hero;
