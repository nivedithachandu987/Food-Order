// src/components/Contact.js
import React, { useState } from 'react';
import './Contact.css'; 

const Contact = ({ defaultLocationName = "Foodie Town" }) => {
  const [locationName, setLocationName] = useState(defaultLocationName);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleLocationChange = (event) => {
    setLocationName(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
 
    console.log('Form submitted:', { ...formValues, locationName });
  };

  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-intro">Your feedback is important to us! Please fill out the form below or reach out using the details provided.</p>
        
        <div className="contact-details">
          <h3 className="contact-details-title">Get in Touch</h3>
          <p className="contact-details-item"><strong>Email:</strong> support@fooddelivery.com</p>
          <p className="contact-details-item"><strong>Phone:</strong> +123 456 7890</p>
          <p className="contact-details-item"><strong>Address:</strong> 456 Delivery Drive, {locationName}, FD 54321</p>
        </div>
        
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="name">Name:</label>
          <input 
            className="form-input" 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Enter your name" 
            value={formValues.name}
            onChange={handleInputChange}
            required 
          />

          <label className="form-label" htmlFor="email">Email:</label>
          <input 
            className="form-input" 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Enter your email" 
            value={formValues.email}
            onChange={handleInputChange}
            required 
          />

          <label className="form-label" htmlFor="location">Your Location:</label>
          <input
            className="form-input"
            type="text"
            id="location"
            name="location"
            placeholder="Enter your location"
            value={locationName}
            onChange={handleLocationChange}
            required
          />

          <label className="form-label" htmlFor="message">Message:</label>
          <textarea 
            className="form-textarea" 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="How can we help you?" 
            value={formValues.message}
            onChange={handleInputChange}
            required
          ></textarea>

          <button className="form-button" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
