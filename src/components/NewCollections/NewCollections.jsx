import React, { useState, useEffect } from 'react';
import './NewCollections.css';
import axios from 'axios';
import Item from '../Item/Item';

const NewCollections = () => {
  const [newCollection, setNewCollection] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/products');
        const products = response.data;

        // Filter products by category
        const menProducts = products.filter(item => item.category === 'Men').slice(0, 3);
        const womenProducts = products.filter(item => item.category === 'Women').slice(0, 3);
        const electronicsProducts = products.filter(item => item.category === 'Electronics').slice(0, 2);

        // Combine the filtered products into one array
        const newCollection = [...menProducts, ...womenProducts, ...electronicsProducts];
        setNewCollection(newCollection);
      } catch (error) {
        setError('Error fetching products');
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className='new-collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      {error && <p>{error}</p>}
      <div className="collections">
        {newCollection.map((item, i) => (
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
}

export default NewCollections;
