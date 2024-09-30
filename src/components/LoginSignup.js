// src/components/LoginSignup.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './LoginSignup.css'; // Import CSS for styling

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup forms

  // Handler for toggling between Login and Signup forms
  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="login-signup-container">
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form>
        {/* Common Elements */}
        <div className="form-group">
          <label htmlFor="username-email">Username or Email</label>
          <input type="text" id="username-email" placeholder="Enter your username or email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required />
        </div>

        {/* Login Specific */}
        {isLogin && (
          <div className="form-group">
            <a href="/forgot-password" className="forgot-password-link">Forgot Password?</a>
          </div>
        )}

        {/* Signup Specific */}
        {!isLogin && (
          <>
            <div className="form-group">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" placeholder="Enter your full name" required />
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" required />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select id="gender" required>
                <option value="">Select your gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" placeholder="Enter your address" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" placeholder="Enter your phone number" />
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input type="password" id="confirm-password" placeholder="Confirm your password" required />
            </div>
          </>
        )}

        {/* Submit Button */}
        <button type="submit" className="submit-btn">
          {isLogin ? 'Login' : 'Sign Up'}
        </button>
      </form>
      <p className="toggle-form-text">
        {isLogin ? "Don't have an account?" : 'Already have an account?'} 
        <span onClick={toggleForm} className="toggle-form-link">{isLogin ? ' Sign Up' : ' Login'}</span>
      </p>

      {/* Additional Considerations */}
      <div className="social-login">
        <p>Or sign in with:</p>
        <button className="social-btn">
          <FontAwesomeIcon icon={faFacebook} /> Facebook
        </button>
        <button className="social-btn">
          <FontAwesomeIcon icon={faGoogle} /> Google
        </button>
      </div>
      
      {/* Terms of Service and Privacy Policy */}
      <p className="terms-text">
        By signing up, you agree to our <a href="/contact" className="terms-link">Terms of Service</a> and <a href="/contact" className="privacy-link">Privacy Policy</a>.
      </p>
    </div>
  );
};

export default LoginSignup;
