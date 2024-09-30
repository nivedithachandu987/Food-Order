// src/components/Header.js
import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/" className="logo">Foodie</Link>
      <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/featured-restaurants" className="nav-link">Featured Restaurants</Link></li>
          <li><Link to="/popular-cuisines" className="nav-link">Popular Cuisines</Link></li>
          <li><Link to="/about" className="nav-link">About Us</Link></li>
          <li><Link to="/contact" className="nav-link">Contact Us</Link></li>
          <li><Link to="/order-now" className="nav-link">Order Now</Link></li>
          <li><Link to="/special-offers" className="nav-link">Offer</Link></li>
        </ul>
      </nav>
      <div className="search-container">
        <input 
          type="text" 
          placeholder="Search ..." 
          aria-label="Search......."
        />
        <i className="search-icon" role="img" aria-label="Search icon">🔍</i>
      </div>
      <div className="user-actions">
        <Link to="/login" className="login-btn">Login / Signup</Link> 
      </div>
      <div 
        className="hamburger" 
        onClick={toggleMenu} 
        aria-label={isMenuOpen ? "Close menu" : "Open menu"} 
        tabIndex={0} 
        onKeyPress={(e) => e.key === 'Enter' && toggleMenu()}
        aria-expanded={isMenuOpen}
      >
        ☰
      </div>
    </header>
  );
};

export default Header;
