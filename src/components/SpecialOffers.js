// src/components/SpecialOffers.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './SpecialOffers.css';

const SpecialOffers = () => {
    const navigate = useNavigate();

    const handleGrabNowClick = () => {
        // Optional: Display a confirmation message
        alert("You've grabbed the special offer!");
        // Navigate to the OfferConfirmation page
        navigate('/offer-confirmation'); // Change the route to OfferConfirmation
    };

    return (
        <section className="special-offers">
            <div className="offers-content">
                <h2>Special Offers Just for You!</h2>
                <p>Get 20% off on your first order and enjoy free delivery.</p>
                <button className="cta-button" onClick={handleGrabNowClick}>
                    Grab Now
                </button>
            </div>
        </section>
    );
};

export default SpecialOffers;
