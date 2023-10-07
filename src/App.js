import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './about';
import Contact from './contact';
import Footer from './Footer';
import TestimonialPage from './testimonial';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="content">
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </div>
      <div className="footer">
      <Footer />
      </div>
    </Router>
  );
}

export default App;
