import React from "react";
import styles from "./hero.module.css";
import headphoneImage from "../../assets/Hero-Image.svg";

/**
 * Represents the hero section of the application.
 * Displays a left section with text and a right section with an image.
 * @returns {JSX.Element} The rendered hero section component.
 */
const HeroSection = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_left}>
        <h3>100 Thousand Songs, ad-free</h3>
        <h3>Over thousands podcast episodes</h3>
      </div>
      <div className={styles.hero_right}>
        <img src={headphoneImage} height="250px" width="250px" alt="headphoneImage" />
      </div>
    </div>
  );
};

export default HeroSection;