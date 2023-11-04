import React, { useState, useEffect }from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import CommonDisabilitiesSection from "../components/CommonDisabilitiesSection";

const Home = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.offsetHeight;
    const scrollPosition = window.scrollY;

    if (windowHeight + scrollPosition >= fullHeight) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  return (
    <div>
      <Navbar />
      <HeroSection />
      <CommonDisabilitiesSection />
      {showFooter && <Footer />}
    </div>
  );
};

export default Home;
