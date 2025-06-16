import React, { useState } from "react";
import "./nav.css";
import logo from "../../assets/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="nav">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      {/* Hamburger icon */}
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? '✕' : '☰'}
      </div>

      <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
        <li className="nav-item"><a href="#home">Home</a></li>
        <li className="nav-item"><a href="#about">About Us</a></li>
        <li className="nav-item"><a href="#services">Our Services</a></li>
        <li className="nav-item"><a href="#testmonies">Gallery</a></li>        
        <li className="nav-item"><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
