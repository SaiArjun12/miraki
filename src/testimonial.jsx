
import React from 'react';

const Testimonial = ({ name, role, comment }) => {
  return (
    <div className="testimonial">
      <h3>{name}, {role}</h3>
      <p>{comment}</p>
    </div>
  );
}

export default Testimonial;
