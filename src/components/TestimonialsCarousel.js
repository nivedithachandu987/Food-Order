import React, { useState } from 'react';
import './TestimonialsCarousel.css';

const testimonials = [
    {
        id: 1,
        name: "Mrunalini",
        profilePic: "images (1).jpeg",
        rating: 5,
        comment: "Fantastic! My skin feels amazing. Will definitely repurchase.",
    },
  

    {
        id: 2,
        name: "venu",
        profilePic: "india man-.avif",
        rating: 5,
        comment: "Fantastic! My skin feels amazing. Will definitely repurchase.",
    },

    {
        id: 3,
        name: "Leila",
        profilePic: "usa women.avif",
        rating: 4,
        comment: "Great quality and value for money. Will buy again!",
    },
    {
        id: 4,
        name: "Chanxin",
        profilePic: "chinese-woman.avif",
        rating: 5,
        comment: "I've never been happier with my purchase. Highly recommend!",
    },
    {
        id: 5,
        name: "Emile",
        profilePic: "usa men.avif",
        rating: 4,
        comment: "The product works well, but the shipping took too long.",
    },
    {
        id: 6,
        name: "kavya",
        profilePic: "indian.avif",
        rating: 5,
        comment: "Fantastic! My skin feels amazing. Will definitely repurchase.",
    },
  

    {
        id: 7,
        name: "Li Jie",
        profilePic: "chinese-men.avif",
        rating: 5,
        comment: "Absolutely love this product! It changed my skincare routine.",
    },
    
    {
        id: 8,
        name: "krishna",
        profilePic: "download.jpeg",
        rating: 5,
        comment: "Absolutely love this product! It changed my skincare routine.",
    },
];

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + testimonials.length) % testimonials.length
        );
    };

    return (
        <div className="testimonials-container">
            <h2>What Our Customers Say</h2>
            <div className="testimonial-card">
                <img src={testimonials[currentIndex].profilePic} alt={testimonials[currentIndex].name} className="profile-pic" />
                <h3>{testimonials[currentIndex].name}</h3>
                <div className="star-rating">
                    {Array.from({ length: testimonials[currentIndex].rating }, (_, index) => (
                        <span key={index} role="img" aria-label="star">⭐</span>
                    ))}
                </div>
                <p>"{testimonials[currentIndex].comment}"</p>
            </div>
            <div className="carousel-controls">
                <button onClick={prevTestimonial}>❮</button>
                <button onClick={nextTestimonial}>❯</button>
            </div>
        </div>
    );
};

export default TestimonialsCarousel;
