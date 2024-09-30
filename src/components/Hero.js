import React, { useState } from 'react';
import './Hero.css'; 

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFindRestaurants = () => {
    
    alert(
      "Foodie Restaurant Suggestions:\n" +
      "*Foodie Restaurant at Radisson Blu Plaza, CCCR+XHW, Rd Number 6, Green Valley, Banjara Hills, Hyderabad, Telangana 500034, India. Rating: 4.5 stars."
    );
   
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false); 
  };

  return (
    <section className="hero" id="home"> 
      <div className="hero-content">
        <h1>Delicious Meals Delivered to Your Doorstep</h1>
        <div className="cta-buttons">
          <a href="/order-now" className="cta-btn">Order Now</a>
          <a href="#featured-restaurants" className="cta-btn">View Menu</a>
        </div>
        <div className="location-search">
          <input type="text" placeholder="Enter your location..." />
          <button className="search-btn" onClick={handleFindRestaurants}>Find Restaurants</button>
        </div>
      </div>

      
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h2 style={{ color: 'blue' }}>Foodie Restaurant Suggestions</h2>
            <p>
              * Chill Restaurant at Radisson Blu Plaza, CCCR+XHW, Rd Number 6, Green Valley, Banjara Hills, Hyderabad, Telangana 500034, India. Rating: 4.5 stars.
            </p>
            <button onClick={closeModal} className="close-btn">Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
