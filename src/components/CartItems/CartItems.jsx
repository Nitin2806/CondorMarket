import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './CartItems.css';
import { ShopContext } from '../../Context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';
const apiURL = process.env.REACT_APP_API_URL;


const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart, loading, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  if (loading) {
    return <div>Loading...</div>;
  }

  const handleCheckout = async () => {
    try {
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userResponse = await fetch(`${apiURL}/users/${userId}`);
  
      if (!userResponse.ok) {
        throw new Error('Failed to fetch user details');
      }
  
      const user = await userResponse.json();
  
      const orderData = {
        customer: {
          name: user.firstName + ' ' + user.lastName,
          email: user.email,
          address: user.address,
        },
        items: Object.keys(cartItems).map(id => {
          const product = all_product.find(product => product._id === id);
          return {
            productId: id,
            name: product ? product.name : '',
            quantity: cartItems[id],
            price: product ? product.new_price : 0
          };
        }),
        totalAmount: getTotalCartAmount(),
        status: 'Pending'
      };
  
      console.log('Order Data:', orderData);
  
      const orderResponse = await fetch('`${apiURL}/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });
  
      if (orderResponse.ok) {
        clearCart(); 
        navigate('/order-confirmation');
      } else {
        const errorData = await orderResponse.json();
        console.error('Failed to place the order:', errorData);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e._id] > 0) {
          return (
            <div key={e._id}>
              <div className="cartitems-format cartitems-format-main">
                <img src={e.images[0]} alt={e.name} className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitems-quantity'>{cartItems[e._id]}</button>
                <p>${e.new_price * cartItems[e._id]}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removeFromCart(e._id)} alt="removebutton" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sub Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a PROMO code, Enter it here...</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code here' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
