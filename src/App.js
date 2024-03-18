import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


// Import without curly braces for default exports
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Header from './components/Header';
import Footer from './components/Footer';

//import { Home } from './components/Home';
//import { About } from './components/About';
//import { Services } from './components/Services';
//import { Benefits } from './components/Benefits';
///=import { Header } from './components/Header';
//import { Footer } from './components/Footer';

const AppWrapper = styled.div`
  background-color: #282c34;
  color: white;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
`;

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const App = () => (
  <Router>
    <GlobalStyle />
    <AppWrapper>
      <Header />
      <Main>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/benefits" element={<Benefits />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Main>
      <Footer />
    </AppWrapper>
  </Router>
);

export default App;