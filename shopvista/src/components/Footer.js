import React, { useState } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcMastercard, faCcPaypal, faCcAmex, faApplePay, faGooglePay, faInstagram, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Desktop and Mobile shared content */}
        <div className="footer-section">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettā muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>

        <div className="footer-section">
          <h3>CALL US</h3>
          <p>+44 221 133 5360 • customercare@mettamuse.com</p>
        </div>

        <div className="footer-section">
          <h3>CURRENCY</h3>
          <p>
            <img
              src="https://flagcdn.com/us.svg"
              alt="USD"
              className="currency-icon"
            />{" "}
            USD
          </p>
        </div>

        
        <div className="footer-section collapsible">
          <h3>QUICK LINKS</h3>
            <ul>
              <li>Orders & Shipping</li>
              <li>Join/Login as a Seller</li>
              <li>Payment & Pricing</li>
              <li>Return & Refunds</li>
              <li>FAQs</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
        </div>
        {/* Sections for collapsible content on mobile */}
        <div className="footer-section collapsible">
          <h3>mettā muse</h3>
            <ul>
              <li>About Us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutiques</li>
              <li>Contact Us</li>
              <li>EU Compliances Docs</li>
            </ul>
        </div>


        <div className="footer-section collapsible">
          <h3>FOLLOW US</h3>
            <div className="social-icons">
                <FontAwesomeIcon icon={faInstagram} className="icon" />
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </div>
        </div>

        <div className="footer-section">
          <h3>mettā muse ACCEPTS</h3>
            <div className="payment-icons">
                <FontAwesomeIcon icon={faCcMastercard} className="icon" />
                <FontAwesomeIcon icon={faCcPaypal} className="icon" />
                <FontAwesomeIcon icon={faCcAmex} className="icon" />
                <FontAwesomeIcon icon={faApplePay} className="icon" />
                <FontAwesomeIcon icon={faGooglePay} className="icon" />
            </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
