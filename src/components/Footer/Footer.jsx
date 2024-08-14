import React from 'react'
import './Footer.css'
import logo from '../Assets/logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import x_icon from '../Assets/x_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="" />
            <p>Condor Market</p>
        </div>
        
            <ul className="footer-links">
                <Link to='/mens'><li>Products</li></Link>
                <Link to='/about' ><li>About Us</li></Link>
                <Link to='/contact' ><li>Contact Us</li></Link>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icon} alt="insta" />
                </div>
                <div className="footer-icons-container">
                    <img src={x_icon} alt="x" />
                </div>
                <div className="footer-icons-container">
                    <img src={pinterest_icon} alt="pin" />
                </div>
            </div>
        <div className="footer-copyright">
            <hr />
            <p>&copy; 2024 Condor Market. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer