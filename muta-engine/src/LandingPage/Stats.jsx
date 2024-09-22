import React from 'react';
import styled from 'styled-components';
import codeImage from '../assests/Code.png'; // Replace with the correct image path

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
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  span {
    font-size: 3rem;
    font-weight: bold;
    color: white; /* Numbers in white */
  }

  p {
    color: #00D9FF; /* Text in blue */
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-top: 10px;
  }

  @media (min-width: 768px) {
    span {
      font-size: 3.5rem;
    }

    p {
      font-size: 1.3rem;
    }
  }

  @media (min-width: 1024px) {
    span {
      font-size: 4rem;
    }

    p {
      font-size: 1.4rem;
    }
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 60px;
  background-color: rgba(255, 255, 255, 0.2);
  
  @media (min-width: 768px) {
    height: 80px;
  }

  @media (min-width: 1024px) {
    height: 100px;
  }
`;

const ImageWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;

  /* Updated styling for image with border and padding */
  img {
    max-width: 90%;
    height: auto;
    padding: 20px;
    border-radius: 20px;
    border: 3px solid rgba(255, 255, 255, 0.2); /* Semi-transparent white border */
    background-color: rgba(0, 0, 0, 0.4); /* Dark background behind the image for contrast */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5); /* Stronger shadow for depth */

    @media (min-width: 768px) {
      max-width: 70%; /* More width on larger screens */
    }
  }
`;

const Stats = () => {
  return (
    <StatsSection>
     <StatsWrapper>
        <StatItem>
          <span>5000+</span>
          <p>Active Users</p>
        </StatItem>
        <Divider />
        <StatItem>
          <span>300+</span>
          <p>Companies Trusting MutaEngine</p>
        </StatItem>
        <Divider />
        <StatItem>
          <span>$500M+</span>
          <p>Transaction Secured</p>
        </StatItem>
      </StatsWrapper>
      <ImageWrapper>
        <img src={codeImage} alt="Code block illustration" />
      </ImageWrapper>
    </StatsSection>
  );
};

export default Stats;
