import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItem } = React.useContext(ShopContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    navigate('/'); 
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    setUser(userData);
  }, []);

  return (
    <div className='navbar'>
    
      <div className="nav-logo">
        <Link to='/'> 
          <img src={logo} alt="logo" />
          <p>Condor Market</p>
        </Link>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li onClick={() => { setMenu("home"); setIsMenuOpen(false); }}>
            <Link to='/'>Home</Link>
            {menu === "home" && <hr />}
          </li>
          <li onClick={() => { setMenu("mens"); setIsMenuOpen(false); }}>
            <Link to='/mens'>Men's</Link>
            {menu === "mens" && <hr />}
          </li>
          <li onClick={() => { setMenu("womens"); setIsMenuOpen(false); }}>
            <Link to='/womens'>Women's</Link>
            {menu === "womens" && <hr />}
          </li>
          <li onClick={() => { setMenu("electronics"); setIsMenuOpen(false); }}>
            <Link to='/electronics'>Electronics</Link>
            {menu === "electronics" && <hr />}
          </li>
        </ul>
        <div className="nav-login-cart">
          {user ? (
            <>
              <span>Welcome, {user.username}</span>
              <button onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to='/login'><button>Login</button></Link>
          )}
          <Link to='/cart'>
          <div className='cartButton'>
            <img src={cart_icon} alt="cart" />
            </div>
          </Link>
          <div className="nav-cart-count">{getTotalCartItem()}</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
