import React from 'react';
import "./CSS/About.css";
import logo from '../components/Assets/logo.png';


const About = () => {
    return (
        <div className="about-container">
          <div className="about-content">
            <h1 className="about-title">About Us</h1>
            <p className="about-text">
              Welcome to Condor Market! We are committed to providing the best services to our customers. Our team consists of highly skilled professionals dedicated to excellence and innovation. We believe in creating lasting relationships with our customers and continuously strive to exceed their expectations.
            </p>
            <p className="about-text">
              Founded in 2024, we have grown to become a leader in our industry, with a passion for quality and customer satisfaction. Join us on our journey as we continue to grow and make a positive impact on the world.
            </p>
          </div>
          <div className="about-image">
            <img src={logo} alt="About Us" />
          </div>
        </div>
      );
}

export default About