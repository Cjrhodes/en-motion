import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
  padding: 1rem;
  background-color: blue;
  color: white;
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Text = styled.p`
  margin-top: 0.5rem;
`;

const About = () => (
  <AboutWrapper>
    <Title>About Us</Title>
    <Text>This is some information about us.</Text>
  </AboutWrapper>
);

export default About;