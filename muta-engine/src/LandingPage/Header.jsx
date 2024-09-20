import React from 'react';
import styled from 'styled-components';
import MutaEngine from '../assests/MutaEngine.png';

const HeaderContainer = styled.header`
  background: #00040F;
  position: fixed;
  top: 0;
  width: 100%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled.div`

 img {
    width: 20%;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 80px;
  margin-right: 30%;

  a {
    font-size: 12px;
    font-weight: 600;
    color: white;
    text-decoration: none;
  }
`;

const AuthButtons = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.a`
  padding: 10px;
  font-size: 10px;
  font-weight: bold;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &.signup {
    background-color: #00D9FF;
    color: #1A202C;
    
    &:hover {
      background-color: #00b9e6;
    }
  }

  &.login {
    background-color: #1A202C;
    border: 2px solid #00D9FF;
    color: #FFFFFF;
    
    &:hover {
      background-color: #111827;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Nav>
        <Logo><img src={MutaEngine}></img></Logo>
        <NavLinks>
          <li><a href="#overview">Overview</a></li>
          <li><a href="../pages/AboutUs.jsx">About</a></li>
          <li><a href="#features">Contact Us</a></li>
          <li><a href="#contact">Solutions</a></li>
        </NavLinks>
        <AuthButtons>
        <Button href="#learn-more" className="login">Login</Button>
        <Button href="#start-now" className="signup">Sign Up</Button>
        </AuthButtons>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
