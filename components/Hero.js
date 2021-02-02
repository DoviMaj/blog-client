import React from "react";
import styles from "../styles/Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1>Explore new perspectives</h1>
        <p>
          Read and share ideas from independent voices, world-class
          publications, and experts from around the globe. Everyone's welcome.
        </p>
      </div>
    </div>
  );
};

export default Hero;
