import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import line from "../assets/images/line-1.svg";

export const Navbar = () => {
  return (
    <div className="landing">
      <div className="navbar">
        <div className="div">
          <Link to="/" className="text-wrapper">
            Home
          </Link>
          <Link to="/" className="text-wrapper">
            About
          </Link>
          <Link to="/" className="text-wrapper">
            Features
          </Link>
          <Link to="/" className="text-wrapper">
            Sradhaa
          </Link>
          <Link to="/" className="text-wrapper">
            Contact
          </Link>
        </div>
        <div className="text-wrapper-2">SideKick</div>
        <img className="line" alt="Line" src={line} />
      </div>
    </div>
  );
};

export default Navbar;
