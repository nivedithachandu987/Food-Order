import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">About Foodie</h2>
          <p className="about-description">
            At <strong>Foodie</strong>, we believe that food brings people together. Our platform connects you with the best restaurants in your area, making it easy for you to explore, discover, and enjoy diverse cuisines from the comfort of your home.
          </p>
          <p className="about-description">
            With a commitment to convenience, quality, and timely delivery, we aim to provide an unmatched food ordering experience. Whether you're craving a quick bite or planning a full-course meal, Foodie ensures that every dish reaches you fresh and delicious.
          </p>
          <p className="about-mission">
            <strong>Our Mission:</strong> To make food ordering as easy and satisfying as possible, while supporting local restaurants and bringing joy to food lovers everywhere.
          </p>
          <p className="contact-link">
            Have questions? <a href="/contact" className="contact-us-link">Contact Us</a>!
          </p>
        </div>
        <div className="about-image-container">
          <img 
            src="hand-drawn-people-taking-pictures-food-illustration_23-2150531243.avif" 
            alt="Delicious food on a table" 
            className="about-image"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
