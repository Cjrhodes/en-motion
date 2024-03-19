// components/ImageSlider.js
'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/imgslider.module.css';

const ImageSlider = ({ images }) => {
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIdx((currentImageIdx + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentImageIdx, images.length]);

  return (
    <div className={styles.slider}>
      <img
        src={images[currentImageIdx]}
        alt="background"
        className={styles.sliderImage}
      />
    </div>
  );
};

export default ImageSlider;