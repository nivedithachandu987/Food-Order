// src/components/Footer.js
import React, { useState } from 'react';
import './Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Subscribed with: ${email}`);
        setEmail(''); 
    };

    return (
        <footer className="footer">
            <div className="footer-links">
                <ul>

                <li><a href="/" className="nav-link">Home</a></li>
                <li><a href="/about" className="nav-link">About Us</a></li>
                <li><a href="/special-offers" className="nav-link">Offer</a></li> 
                    <li><a href="/contact" className="nav-link">Terms of Service</a></li>
                    <li><a href="/contact" className="nav-link">Contact Us</a></li>
                </ul>
            </div>
            
            <div className="footer-social">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            
            <div className="footer-newsletter">
                <h3>Subscribe to our Newsletter</h3>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </footer>
    );
};

export default Footer;
