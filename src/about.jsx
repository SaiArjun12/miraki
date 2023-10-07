import React from 'react';
import { useSpring, animated } from 'react-spring';
import './About.css'; 
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import Navbar from './Navbar';

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    
    <div className="container">
        <Navbar/>
      <animated.div style={fadeIn}>
        <div className="content">
          <div className="text">
            <h2>About Us</h2>
            <p>
              Welcome to our company's website! We are a dedicated team of professionals
              passionate about providing high-quality services/products to our clients.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra
              lectus nec nisi lacinia, a commodo sapien lacinia. Integer euismod
              efficitur augue, a dictum purus ultrices in. Suspendisse auctor libero
              at libero commodo, id consequat sapien viverra.
            </p>
          </div>
          <div className="image">
            <img src={image4} alt="absent" />
          </div>
        </div>
        
        <div className="content">
          <div className="image">
            <img src={image5} alt="not present" />
          </div>
          <div className="text">
            <p>
              Our mission is to exceed our clients' expectations by delivering
              outstanding results. Whether you're looking for expert advice, innovative
              solutions, or reliable support, our team is here to assist you every step
              of the way.
            </p>
            <p>
              Feel free to <a href="/contact">contact us</a> if you have any questions
              or if there's anything specific you would like to know. We look forward to
              serving you!
            </p>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default About;
