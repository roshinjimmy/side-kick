import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="social-links">
        <a href="link" target="_blank">
          Twitter
        </a>
        <a href="link" target="_blank">
          Facebook
        </a>
        <a href="link" target="_blank">
          Instagram
        </a>
      </div>

      <div className="contact-info">
        <p>Contact Us:</p>
        <p>Email: email id</p>
        <p>Phone: 1234567890</p>
      </div>
    </footer>
  );
};

export default Footer;
