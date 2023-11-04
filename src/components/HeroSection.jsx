import React from "react";
import "./HeroSection.css";
import heroImage from '../assets/images/hero-image.jpg';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <h1>Empowering Communication, Fostering Inclusivity</h1>
      <img src={heroImage} alt="Diverse individuals interacting happily"/>
    </div>
  );
};

export default HeroSection;
