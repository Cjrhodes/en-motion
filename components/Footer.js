import React from 'react';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerWrapper}>
      <ul className={styles.footerList}>
      <li>
        <a href="/privacy">Privacy Policy</a>
      </li>
      <li>
        <a href="/terms">Terms of Service</a>
      </li>
      <li>
        <a href="/contact">Contact Us</a>
      </li>
      </ul>
    </footer>
  );
};

export default Footer;