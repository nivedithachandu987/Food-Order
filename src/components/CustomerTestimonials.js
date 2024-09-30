import React from 'react';
import Slider from 'react-slick';
import './CustomerTestimonials.css'; 

const CustomerTestimonials = () => {
  const testimonials = [
   
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    responsive: [ 
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
        },
      },
    ],
  };

  return (
    <section className="customer-testimonials" id="testimonials">
      <h2>Customer Testimonials</h2>
      <div className="testimonial-slider-container"> 
        <Slider {...settings}>
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial">
            
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CustomerTestimonials;
