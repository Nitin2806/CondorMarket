import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import './CSS/LoginSignup.css';
const apiURL = process.env.REACT_APP_API_URL;


const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    address: '',
    accountType: 'customer'
  });
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiURL}/users/register`, formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input type="text" name="username" placeholder='Username' value={formData.username} onChange={handleChange} />
            <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
            <input type="text" name="firstName" placeholder='First Name' value={formData.firstName} onChange={handleChange} />
            <input type="text" name="lastName" placeholder='Last Name' value={formData.lastName} onChange={handleChange} />
            <input type="date" name="dateOfBirth" placeholder='Date of Birth' value={formData.dateOfBirth} onChange={handleChange} />
            <input type="text" name="address" placeholder='Address' value={formData.address} onChange={handleChange} />
          </div>
          <button type="submit">Continue</button>
          {error && <p className='error'>{error}</p>}
          <p className='loginsignup-login'>Already have an Account? <span onClick={() => navigate('/login')}>Login</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name='' id='' />
            <p>By continuing, I agree to the Terms and Conditions</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
