import React from 'react';
import Header from '../components/Header'; // Adjust the path as necessary
import ImageSlider from '../components/ImageSlider'; // Adjust the path as necessary
import AboutSection from '../components/About'; // Adjust the path as necessary
import Footer from '../components/Footer'; // Adjust the path as necessary
import styles from '../styles/page.module.css'; // Ensure this path is correct

// Example array of image URLs, adjust according to where you manage this array
const images = [
  '/images/kettlebell.jpeg',
  '/images/turkish.jpeg',
  '/images/dude-boxing.jpg',
  '/images/trx.jpeg',
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      {/* Ensure the ImageSlider component is receiving the images prop as needed */}
      <ImageSlider images={images} /> 
   
      


     
    </div>
  );
}
