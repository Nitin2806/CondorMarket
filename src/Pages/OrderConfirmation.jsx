import React from 'react';
import './CSS/OrderConfirmation.css';

const OrderConfirmation = () => {
  return (
    <div className='order-confirmation'>
      <h1>Thank You for Your Order!</h1>
      <p>Your order has been placed successfully.</p>
      <p>You will receive an email confirmation shortly.</p>
      <button onClick={() => window.location.href = '/'}>Go to Homepage</button>
    </div>
  );
};

export default OrderConfirmation;
