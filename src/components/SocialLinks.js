// SocialLinks.js
import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialMediaList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

const SocialLinks = () => (
  <SocialMediaList>
    <li>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
    </li>
  </SocialMediaList>
);

export { SocialLinks };