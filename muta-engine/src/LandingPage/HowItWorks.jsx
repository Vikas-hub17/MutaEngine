import React from 'react';
import styled from 'styled-components';
import shieldImage1 from '../assests/Img.png'; // Placeholder for "Polymorphic Code" image
import shieldImage2 from '../assests/Img.png'; // Placeholder for "How It Works" image

const Section = styled.section`
  background-color: #00040F;
  color: white;
  padding: 50px 20px;

  @media (min-width: 768px) {
    padding: 80px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
  }
`;

const ContentBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
  margin: 0 auto;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
    margin: 0 20px; /* Add horizontal margin to separate blocks */
  }
`;

const ImageWrapper = styled.div`
  margin-bottom: 20px;

  img {
    width: 100%;
    max-width: 350px;
    border-radius: 20px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  @media (min-width: 768px) {
    max-width: 400px; /* Slightly larger images on larger screens */
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  color: #FFFFFF;
  margin-bottom: 10px;

  span {
    color: #00D9FF; /* Teal highlight */
  }

  @media (min-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #B0B3B8;
  margin-bottom: 30px;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

const Button = styled.a`
  display: inline-block;
  padding: 10px 20px;
  border: 2px solid #00D9FF;
  border-radius: 50px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #00D9FF;
    color: #00040F;
  }
`;

const HowItWorks = () => {
  return (
    <Section>
      <ContentWrapper>
        {/* What is the Polymorphic Code Engine */}
        <ContentBlock>
          <ImageWrapper>
            <img src={shieldImage1} alt="Polymorphic Code Engine" />
          </ImageWrapper>
          <Title>
            What is the <span>Polymorphic</span> Code Engine?
          </Title>
          <Description>
            Polymorphic code engine dynamically mutates the software's source code in real-time, preventing reverse engineering and ensuring enhanced security.
          </Description>
          <Button href="#">Learn More</Button>
        </ContentBlock>

        {/* How It Works */}
        <ContentBlock>
          <ImageWrapper>
            <img src={shieldImage2} alt="How it works" />
          </ImageWrapper>
          <Title>
            How It <span>Works?</span>
          </Title>
          <Description>
            By constantly changing the software code during access or execution, the Polymorphic Code Engine creates a moving target, making it extremely difficult for hackers to analyze or decompile.
          </Description>
          <Button href="#">Learn More</Button>
        </ContentBlock>
      </ContentWrapper>
    </Section>
  );
};

export default HowItWorks;
