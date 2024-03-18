import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: #282c34;
  color: white;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 2rem;
`;

const Footer = () => (
  <FooterWrapper>
    <FooterList>
      <li>
        <a href="/privacy">Privacy Policy</a>
      </li>
      <li>
        <a href="/terms">Terms of Service</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
    </FooterList>
  </FooterWrapper>
);

export default Footer;