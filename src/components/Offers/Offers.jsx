import React from 'react'
import './Offers.css'
import { Link } from 'react-router-dom';
import exclusive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
        <div className="offers-left">
          <div className='offer-text'>
            <h1>Exclusive Offers For You</h1>
            </div>
            <h2>Only on Best Sellers</h2>
            <button><Link style={{ textDecoration: 'none', color:'white'}} to='/womens'>Check Now</Link></button>
        </div>
        <div className="offers-right">
            <img src={exclusive_image} alt="exclusive" />
        </div>
    </div>
  )
}

export default Offers