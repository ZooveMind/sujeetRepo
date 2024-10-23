import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footerContainer" id="Contact">
      <div className="footerLeft">
        <h2>Zoove</h2>
        <div className="socialIcons">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
      <div className="footerRight">
        <a href="#Home">Home</a>
        <a href="#AboutUs">About</a>
        <a href="#Services">Services</a>
      </div>
    </footer>
  );
};

export default Footer;
