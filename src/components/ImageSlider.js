import React, { useState, useEffect } from 'react';
import '../styles/ImageSlider.css'; // Ensure this CSS file exists and is linked correctly


// Then, use this `images` array within your ImageSlider component

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate images every 5 seconds
  useEffect(() => {
    const interval = images && setInterval(() => {
      setCurrentIndex(currentIndex => (currentIndex + 1) % images.length);
    }, 8000); // Adjust time for faster or slower rotation
    return () => clearInterval(interval);
  }, [images]);

  

  // Check if images is defined and has length
  if (!images || images.length === 0) {
    return <div>Loading images...</div>; // Or any other placeholder content
  }

  return (
    <div className="image-slider">
      {images.map((image, index) => (
        <div
          key={index}
          className={`image ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      ))}

    </div>
  );
};
export { ImageSlider };