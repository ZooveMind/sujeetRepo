import React from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import logo from "../../assets/ZooveLogoMain.png"
const Footer = () => {
  return (
    <footer className="footerContainer" id="Contact">
      <div className="footerLeft">
        <div className='firstHalf'>
          <img src={logo} alt="" className='navLogo'/>
          <div className="socialIcons">
            <a href="https://www.linkedin.com/company/zoove-space/about/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in" style={{color:"#3a3aeb"}}></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter" ></i>
            </a>
            <a href="https://www.instagram.com/zoove.space/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" style={{color:"red"}}></i>
            </a>
          </div>
        </div>
      </div>
        <div className="footerRight">
        <h2>For Further Enquiries &nbsp;</h2>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=questions@zoove.space" target="_blank">
        <i class="fas fa-envelope">&nbsp;</i>
        Email Us</a>
        </div>
    </footer>
  );
};

export default Footer;
