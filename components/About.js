// components/AboutSection.js
import React from 'react';
import styles from '../styles/AboutSection.module.css';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.textContainer}>
        <h2 className={styles.heading}>About En-Motion</h2>
        <p className={styles.description}>
          En-Motion is a leading company in the motion industry, specializing in
          providing innovative solutions for a wide range of applications. With
          years of experience and a dedication to excellence, we strive to push
          the boundaries of what's possible in motion technology.
        </p>
        <p className={styles.description}>
          Our team of skilled engineers and experts work tirelessly to develop
          cutting-edge products that meet the highest standards of quality and
          performance. From precision motion control systems to advanced
          robotics solutions, we offer a comprehensive range of services tailored
          to meet the unique needs of our clients.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="/images/about-image.jpg"
          alt="About En-Motion"
          className={styles.image}
        />
      </div>
    </section>
  );
};

export default AboutSection;