import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header">
        {/* Logo Section */}
        <div className="logo-container">
            <div className="logo">LOGO</div>
            <div className="header-right">
                <span className="icon">🔍</span>
                <span className="icon">❤️</span>
                <span className="icon">🛒</span>
                <span className="icon">👤</span>
                <div className="language-dropdown">ENG ▼</div>
            </div>
        </div>
        

        {/* Navigation Links */}
        <nav className="nav-bar">
          <div className="nav-links">
            <a href="#shop">Shop</a>
            <a href="#skills">Skills</a>
            <a href="#stories">Stories</a>
            <a href="#about">About</a>
            <a href="#contact">Contact Us</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
