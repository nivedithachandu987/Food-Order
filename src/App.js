import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedRestaurants from './components/FeaturedRestaurants';
import PopularCuisines from './components/PopularCuisines'; 
import HowItWorks from './components/HowItWorks';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import SpecialOffers from './components/SpecialOffers';
import Footer from './components/Footer';
import Restaurants from './components/Restaurants';
import About from './components/About'; 
import Contact from './components/Contact'; 
import OrderNow from './components/OrderNow'; 
import IndianCuisine from './components/IndianCuisine'; 
import ItalianCuisine from './components/ItalianCuisine'; 
import ChineseCuisine from './components/ChineseCuisine'; 
import MexicanCuisine from './components/MexicanCuisine'; 
import OfferConfirmation from './components/OfferConfirmation';
import LoginSignup from './components/LoginSignup'; 

import './App.css';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={
          <>
            <Hero />
            <FeaturedRestaurants />
            <PopularCuisines /> 
            <SpecialOffers />
            <TestimonialsCarousel />
            <HowItWorks />
          </>
        } />

        {/* Other routes */}
        <Route path="/featured-restaurants" element={<FeaturedRestaurants />} />
        <Route path="/popular-cuisines" element={<PopularCuisines />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/order-now" element={<OrderNow />} />
        <Route path="/cuisine/indian" element={<IndianCuisine />} />
        <Route path="/cuisine/italian" element={<ItalianCuisine />} />
        <Route path="/cuisine/chinese" element={<ChineseCuisine />} />
        <Route path="/cuisine/mexican" element={<MexicanCuisine />} />
        <Route path="/special-offers" element={<SpecialOffers />} />
        <Route path="/offer-confirmation" element={<OfferConfirmation />} />
        
        {/* Route for Login/Signup */}
        <Route path="/login" element={<LoginSignup />} /> 
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
