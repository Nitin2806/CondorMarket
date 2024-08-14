import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { useNavigate } from 'react-router-dom';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        const token = localStorage.getItem('token');
        
        if (token) {
          addToCart(product._id);
        } else {
          navigate('/login'); 
        }
      };
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.images[0]} alt={product.brand} />
                <img src={product.images[1]} alt={product.brand} />
                <img src={product.images[2]} alt={product.brand} />
                <img src={product.images[3]} alt={product.brand} />
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.images[0]} alt={product.brand} />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_icon} alt="star" />
                <img src={star_dull_icon} alt="star" />
                <p>(69)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-description">
                {product.description}
            </div>
            <button onClick={()=>{handleAddToCart()}}>ADD TO CART</button>
            <p className='productdisplay-right-category'><span>Category : </span>{product.category}</p>
            <p className='productdisplay-right-category'><span>Tags : </span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay