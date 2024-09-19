import React from 'react';
import styled from 'styled-components';
import code from '../assests/Code.jpg'; // Assuming you have an image of the code snippet to use here.

const StatsSection = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;
  text-align: center;

  @media (min-width: 768px) {
    padding: 80px 50px;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
  flex-wrap: wrap;
`;

const StatItem = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #FFFFFF;
  margin-bottom: 20px;

  span {
    color: #00D9FF; /* Teal for emphasized text */
    display: block;
    font-size: 1rem;
    font-weight: normal;
    color: #00D9FF;
  }

  @media (min-width: 768px) {
    font-size: 2rem;
    span {
      font-size: 1.2rem;
    }
  }
`;

const CodeSnippet = styled.div`
  background-color: #1A202C;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5);
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }
`;

const Stats = () => {
  return (
    <StatsSection>
      <StatsContainer>
        <StatItem>
          5000+ <span>ACTIVE USERS</span>
        </StatItem>
        <StatItem>
          300+ <span>COMPANIES TRUSTING MUTAENGINE</span>
        </StatItem>
        <StatItem>
          $500M+ <span>TRANSACTION SECURED</span>
        </StatItem>
      </StatsContainer>

      <CodeSnippet>
        <img src={code} alt="Code Snippet" />
      </CodeSnippet>
    </StatsSection>
  );
};

export default Stats;
