import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Stats from './components/Stats';
import Footer from './components/Footer';
import { createGlobalStyle } from 'styled-components';

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
      <Footer />
    </div>
  );
}

export default App;
