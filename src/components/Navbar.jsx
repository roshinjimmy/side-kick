import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav>
        <h1>Side Kick</h1>
        <ul>
          <li>
            <Link to="/" className="navbar-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="navbar-link">About</Link>
          </li>
          <li>
            <Link to="/features" className="navbar-link">Features</Link>
          </li>
          <li>
            <Link to="/sradhaa" className="navbar-link">Sradhaa</Link>
          </li>
          <li>
            <Link to="/contact" className="navbar-link">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
