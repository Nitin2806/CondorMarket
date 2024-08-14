import React, { useState } from 'react';
import axios from 'axios';
import './CSS/LoginSignup.css'
const apiURL = process.env.REACT_APP_API_URL;


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiURL}/users/login`, formData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      console.log('Login successful:', response.data);
      window.location.href = '/'; 
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input type="email" name="email" placeholder='Email Address' value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder='Password' value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Login</button>
          {error && <p className='error'>{error}</p>}
          <p className='loginsignup-login'>Don't have an Account? <span onClick={() => window.location.href = '/register'}>Sign Up</span></p>
        </form>
      </div>
    </div>
  );
}

export default Login;