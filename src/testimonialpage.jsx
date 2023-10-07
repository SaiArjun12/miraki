import React, { Component } from 'react';
import './test.css';



const Testimonial = ({ name, role, comment }) => {
  return (
    <div className="testimonial">
      <h3>{name}, {role}</h3>
      <p>{comment}</p>
    </div>
  );
}

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: 'Prathap reddy',
      role: 'Manager',
      comment: 'Dynamic team with clear vision and energy. Awesome response and quick action team.'
    },
    {
      name: 'Ashok',
      role: 'Director',
      comment: 'Highly motivated team with a customer-first approach. Delivers products with good quality as per the requirement.'
    }
  ];

  return (
    <div className="testimonials-page">
      <h2>Testimonials</h2>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}

export default TestimonialsPage;
