import React from 'react';
import styled from 'styled-components';
import codeImage from '../assests/Code.jpg'; // Replace with the correct image path

const StatsSection = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 80px 20px;
  }
`;

const StatsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  padding-bottom: 40px;

  @media (min-width: 1024px) {
    padding-bottom: 60px;
  }
`;

const StatItem = styled.div`
  font-size: 1.5rem;
  text-align: center;

  span {
    color: #00D9FF;
    font-size: 2.5rem;
    font-weight: bold;
    display: block;
  }

  @media (min-width: 768px) {
    font-size: 1.8rem;
  }

  @media (min-width: 1024px) {
    font-size: 2rem;

    span {
      font-size: 3rem;
    }
  }
`;

const Divider = styled.div`
  width: 2px;
  height: 60px;
  background-color: #00D9FF;
  opacity: 0.5;
  margin: 0 30px;

  @media (max-width: 768px) {
    display: none; /* Remove the divider for smaller screens */
  }
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;

  img {
    width: 100%;
    max-width: 850px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }
`;

const Stats = () => {
  return (
    <StatsSection>
      <StatsWrapper>
        <StatItem>
          <span>5000+</span> Active Users
        </StatItem>
        <Divider />
        <StatItem>
          <span>300+</span> Companies Trusting MutaEngine
        </StatItem>
        <Divider />
        <StatItem>
          <span>$500M+</span> Transaction Secured
        </StatItem>
      </StatsWrapper>
      <ImageWrapper>
        <img src={codeImage} alt="Code block illustration" />
      </ImageWrapper>
    </StatsSection>
  );
};

export default Stats;
