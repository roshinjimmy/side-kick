import React, { useState, useEffect }from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import CommonDisabilitiesSection from "../components/CommonDisabilitiesSection";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <CommonDisabilitiesSection />
    </div>
  );
};

export default Home;
