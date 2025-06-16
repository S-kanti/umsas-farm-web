import React from "react";
import "./footer.css";
import { FaFacebookF, FaTwitter, FaWhatsapp, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-content container">
        <div className="footer-top">
          <div className="footer-info">
            <h3>Umsas Farm</h3>
            <p>We specializes in growing and selling fresh produce.</p>
            <p>📍 No. 12 kiyawa road, jigawa, Nigeria</p>
            <p>📞 +234 123 456 7890</p>
            <p>📧 umsas@umsasfarms.com</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
             <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#gallery">Gallery</a>            
          </div>

          <div className="newsletter">
            <h4>📬 Subscribe to our newsletter</h4>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="f-social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaWhatsapp /></a>
            <a href="#"><FaTiktok /></a>
          </div>
          <p>&copy; {new Date().getFullYear()} YourCompanyName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
