import React from 'react';
import Link from 'next/link';
import styles from '../styles/header.module.css';
//import SocialLinks from './SocialLinks';
import { SocialLinks } from './SocialLinks';


const Header = () => (
  <header className={styles.headerWrapper}>
    <nav>
      <ul className={styles.navList}>
        <li>
          <Link href="/about" className={styles.styledNavLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className={styles.styledNavLink}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/benefits" className={styles.styledNavLink}>
            Benefits
          </Link>
        </li>
      </ul>
    </nav>
    <SocialLinks />
  </header>
);

export default Header;