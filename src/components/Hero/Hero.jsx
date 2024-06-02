import React from 'react';
import './Hero.css';
import hero_image from '../Assets/profile.png';
import arrow_icon from '../Assets/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <img src={hero_image} alt="Hero image" />
        </div>
        <div className="hero-right">
            <h2>Summer Collection</h2>
            <p>for everyone !!!</p>
            <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Hero