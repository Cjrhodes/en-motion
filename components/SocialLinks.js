import React from 'react';
import styles from '../styles/SocialLinks.module.css';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const SocialLinks = () => (
  <ul className={styles.socialMediaList}>
    <li>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
      <FaFacebook size="2em" />
      </a>
    </li>
    <li>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
      <FaTwitter size="2em" />
      </a>
    </li>
    <li>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
      <FaInstagram size="2em" />
      </a>
    </li>
  </ul>
);

export { SocialLinks };