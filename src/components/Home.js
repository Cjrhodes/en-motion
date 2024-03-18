import React from 'react';
//import ImageSlider from './components/ImageSlider';
import { ImageSlider } from './ImageSlider';
import styles from '../styles/Home.css';

// Example array of image URLs
const images = [
  './images/AdobeStock_163791437.jpeg',
  './images/AdobeStock_298781114.jpeg',
  './images/turkish.jpeg',
  // Add more image URLs as needed
];

const Home = () => (
  <div>
    <ImageSlider images={images} />

    <div className={styles.section}>
      <div className={styles.textSection}>
        <h1>En-Motion</h1>
        <p>In-motion </p>
      </div>
      <div className={styles.imageSection}>
        <img className={styles.styledImage} src="" alt="Descriptive Alt Text" />
      </div>
    </div>
  </div>
);
export default Home;
