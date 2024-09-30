// HowItWorks.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils, faShoppingCart, faClipboardCheck } from '@fortawesome/free-solid-svg-icons'; // Import relevant icons
import './HowItWorks.css'; 

const HowItWorks = () => {
  return (
    <section className="how-it-works" id="how-it-works">
      <h2>How It Works</h2>
      <div className="steps">
        <div className="step">
          <FontAwesomeIcon icon={faUtensils} size="3x" />
          <h3>1. Choose a Restaurant</h3>
          <p>Select from a variety of restaurants available in your area.</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faShoppingCart} size="3x" />
          <h3>2. Add Items to Cart</h3>
          <p>Browse the menu and add your favorite items to your cart.</p>
        </div>
        <div className="step">
          <FontAwesomeIcon icon={faClipboardCheck} size="3x" />
          <h3>3. Place an Order</h3>
          <p>Complete your order and enjoy your meal!</p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
