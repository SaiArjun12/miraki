import React, { useState } from 'react';
import './contact.css';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const { name, email, message } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(formData);
   
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    

    
    <div className="container">
    <Navbar/>
    <h2>Contact Us</h2>

    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          id="name"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email address:</label>
        <input
          type="email"
          className="form-control"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="message" className="form-label">Message:</label>
        <textarea
          className="form-control"
          id="message"
          name="message"
          value={message}
          onChange={handleChange}
          rows="5"
          required
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
    <br/><br/>
    
  </div>
  
);
}

export default ContactForm;
