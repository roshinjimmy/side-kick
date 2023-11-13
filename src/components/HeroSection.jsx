import React from "react";
import "./HeroSection.css";
import vector from "../assets/images/vector.svg";
import heroImage from "../assets/images/hero-image.svg";

const HeroSection = () => {
  return (
    <div className="landing">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <img className="vector" alt="Vector" src={vector} />
          <div className="empowering">
            Empowering Communication. <br />
            Fostering Inclusivity.
          </div>
          <img
            className="community-cuate"
            alt="Community cuate"
            src={heroImage}
          />
          <div className="rectangle" />
          <div className="text-wrapper-3">Learn More.</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
