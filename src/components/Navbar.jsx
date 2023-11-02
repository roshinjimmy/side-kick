import React from "react";
import "./Navbar.css"

export const Navbar = () => {
  return (
    <nav>
      <h1>Side Kick</h1>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
