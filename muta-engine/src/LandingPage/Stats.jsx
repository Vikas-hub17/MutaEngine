import React from 'react';
import styled from 'styled-components';
import Code from '../assests/Code.jpg';

// Styled Components
const StatsSection = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;

  gap: 200px;
  margin-bottom: 40px;
`;

const StatItem = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: 
  span {
    color: #00D4FF;
    display: inline-block;
    font-size: 15px;
    margin-top: 8px;
  }
`;

const CodeSnippetContainer = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 40px;
  width: 800px;
  height: 600px;
  max-width: 800px;
  position: relative;
`;

const CodeSnippet = styled.pre`


  img{
  height: auto;
  width:90%;
  text-align: center;
  margin-top: 30px;
  }
`;


const Stats = () => {
  return (
    <StatsSection>
      <StatsContainer>
        <StatItem>
          5000+ &nbsp; <span>Active <br></br>Users</span>
        </StatItem>
        <StatItem>
          300+ &nbsp; <span>Companies <br></br>Trusting <br></br>MutaEngine</span>
        </StatItem>
        <StatItem>
          $500M+ &nbsp;  <span>Transaction <br></br> Secured</span>
        </StatItem>
      </StatsContainer>
      
      <CodeSnippetContainer>
        <CodeSnippet>
          <img src={Code}></img>
        </CodeSnippet>
      </CodeSnippetContainer>
    </StatsSection>
  );
};

export default Stats;
