import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <FaInstagram size={20} />
        <FaTwitter size={20} />
        <FaFacebook size={20} />
        <FaLinkedin size={20} />
      </div>
      <p className="footer-text">&copy; 2023 crust & co</p>
      <p className="createdBy">Designed by Syed Mahboob</p>
    </div>
  );
}

export default Footer;


