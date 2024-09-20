import React from 'react';
import styled from 'styled-components';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

// Styled Components
const FooterContainer = styled.footer`
  background-color: #00040F;
  color: white;
  padding: 40px 0;
  font-family: 'Arial', sans-serif;
  text-align: center;
  border-top: 1px solid #333;
`;

const FooterLogo = styled.div`
  margin-bottom: 20px;

  img {
    height: 40px;
  }
`;

const FooterNav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-bottom: 20px;

  a {
    color: #fff;
    text-decoration: none;
    font-size: 16px;
    font-weight: 400;

    &:hover {
      color: #00D4FF;
    }
  }
`;

const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;

  a {
    color: white;
    font-size: 20px;
    transition: color 0.3s ease;

    &:hover {
      color: #00D4FF;
    }
  }
`;

const FooterCopyright = styled.div`
  font-size: 14px;
  color: #777;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo>
        {/* You can replace this with an actual logo image if needed */}
        <img src="/path-to-logo.png" alt="MutaEngine Logo" />
      </FooterLogo>

      <FooterNav>
        <a href="#overview">Overview</a>
        <a href="#aboutus">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#features">Features</a>
        <a href="#privacy">Privacy Policy</a>
        <a href="#terms">Terms of Use</a>
      </FooterNav>

      <FooterSocials>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
      </FooterSocials>

      <FooterCopyright>
        MutaEngine © 2024. All rights reserved.
      </FooterCopyright>
    </FooterContainer>
  );
};

export default Footer;
