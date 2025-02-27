import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} />
          <p>
            Enjoy delicious meals delivered to your doorstep with our fast and
            reliable food delivery service. Explore a variety of cuisines, track
            your orders in real time, and experience hassle-free online
            payments. Contact us for support or follow us on social media for
            the latest updates and offers.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} />
            <img src={assets.twitter_icon} />
            <img src={assets.linkedin_icon} />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-908756575</li>
            <li>contact@tomato.com</li>
          </ul>
        </div>
      </div>
      
      <hr />
      <p className="footer-copyright">
        Copyright 2025 &copy; Tomato.com-All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
