import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image1 from './images/Image1.jpg';
import Image2 from './images/Image2.jpg';
import Image3 from './images/Image3.jpg';
import './home.css';
import Navbar from './Navbar';
import logo1 from './images/hp.png';
import logo2 from './images/ibm.png';
import logo3 from './images/microsoft.png';
import logo4 from './images/google.png';
import logo5 from './images/mindtree.png';

const Home = () => {
  return (
    
      
    
    <div className="container">
      <Navbar/>
    
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image1} 
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image2} 
            alt="Second slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Image3} 
            alt="Third slide"
          />
          <Carousel.Caption>
          
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className='text1'>
      <p>Build Revolutionary Businesses with Advanced IT Solutions</p>
      </div>
      <div className='text2'>
      <p>We serve to facilitate businesses to grow mutually higher with customers. We focus on three core factors: your web site, apps, brand, promotion. We understand the means of establishing websites and mobile applications via our expertise and deliver award-winning solutions. What makes us stand out from the crowd? We possess technologically advanced IT solutions given by creative and experienced professionals.</p>


      </div>
      <marquee behavior="scroll" direction="left" className="marquee">
        <img src={logo1} alt="Company Logo 1" className="logo" />
        <img src={logo2} alt="Company Logo 2" className="logo" />
        <img src={logo3} alt="Company Logo 3" className="logo" />
        <img src={logo4} alt="Company Logo 4" className="logo" />
        <img src={logo5} alt="Company Logo 5" className="logo" />
      </marquee> 
    </div>
  
  );
}

export default Home;
