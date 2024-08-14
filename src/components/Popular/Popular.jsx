import React, { useState, useEffect } from 'react';
import './Popular.css';
import axios from 'axios';
import Item from '../Item/Item';

const Popular = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products'); 
        const womenProducts = response.data.filter(item => item.category == 'Women').slice(0, 4);
        setProducts(womenProducts);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      {error && <p>{error}</p>}
      <div className="popular-item">
        {products.map((item, i) => (
          <Item
            key={i}
            id={item._id}
            name={item.name}
            image={item.images[0]}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default Popular;
