import React, { useEffect, useState } from 'react';
import './RelatedProducts.css';
import axios from 'axios';
import Item from '../Item/Item';
const apiURL = process.env.REACT_APP_API_URL;

const RelatedProducts = ({ product }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`${apiURL}/products`); 
        const data = response.data;

        const filteredProducts = data.filter(
          (item) => item.category === product.category && item._id !== product._id
        );

        setRelatedProducts(filteredProducts.slice(0, 4));
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    if (product.category) {
      fetchProducts();
    }
  }, [product]);

  return (
    <div className='relatedproducts'>
      <h1>Related Products</h1>
      <hr />
      <div className="relatedproducts-item">
        {relatedProducts.length > 0 ? (
          relatedProducts.map((item) => (
            <Item
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.images[0]} 
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))
        ) : (
          <p>No related products found.</p>
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
