// components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactWrapper = styled.section`
  background-color: #00040F;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
`;

const ContactContainer = styled.div`
  margin-top: -100px;
  background: linear-gradient(135deg, #0b0d17 0%, #282c35 100%);
  padding: 40px 50px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
  max-width: 1200px;
  height: 40vh;
`;

const TextContent = styled.div`
  max-width: 600px;
`;

const Heading = styled.h2`
  font-size: 2.5em;
  margin-top: -40px;
  text-transform: uppercase;
  color: white;
  letter-spacing: 2px;
  font-weight: bold;

  span{
   color: #00D9FF;
   }
`;

const Paragraph = styled.p`
  font-size: 1em;
  line-height: 1.6;
  color: #d1d1d1;
  margin-top: 50px;
`;

const ContactButton = styled.a`

  background-color: #00D9FF;
  color: #00040F;
  border-radius: 10px;
  font-weight: bold;
  text-decoration: none;
  transition: background-color 0.3s ease;
  width: 150px;
  height: 50px;
  text-align: center;
  align-content: center;
  margin-bottom: 30px;
  &:hover {
    background-color: #00A7D1;
  }
`;

const Contact = () => {
  return (
    <ContactWrapper>
      <ContactContainer>
        <TextContent>
          <Heading>Ready to <span>Secure</span> Your Software?</Heading>
          <Paragraph>
          Get started with MutaEngine today and protect your software with the most advanced security technology available.
          </Paragraph>
        </TextContent>
        <ContactButton href="#">Start Now</ContactButton>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
