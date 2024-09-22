import React from 'react';
import Header from './LandingPage/Header';
import Hero from './LandingPage/Hero';
import Features from './LandingPage/Features';
import HowItWorks from './LandingPage/HowItWorks';
import Stats from './LandingPage/Stats';
import Footer from './LandingPage/Footer';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from '../src/pages/AboutUs.jsx';
import Contact from './LandingPage/Contact.jsx';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
    background-color: #00040F; /* Apply the background color globally */
    font-family: 'Arial', sans-serif;
    height: 100%;
    width: 100%;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
    width: 100%;
  }
`;

function App() {
  return (
    
    <div className="App">
      <GlobalStyle />
      <Header />
      <Hero />
      <Stats />
      <HowItWorks />
      <Features />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
