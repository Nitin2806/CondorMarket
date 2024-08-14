import React, { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/products`);
                setProducts(response.data);
                setCartItems(getDefaultCart(response.data));
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const getDefaultCart = (products) => {
        let cart = {};
        products.forEach(product => {
            cart[product._id] = 0;
        });
        return cart;
    };

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));
    };

    const clearCart = () => {
        setCartItems(getDefaultCart(products));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        Object.entries(cartItems).forEach(([itemId, quantity]) => {
            if (quantity > 0) {
                const itemInfo = products.find((product) => product._id === itemId);
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * quantity;
                }
            }
        });
        return totalAmount;
    };

    const getTotalCartItem = () => {
        return Object.values(cartItems).reduce((total, quantity) => total + quantity, 0);
    };

    const contextValue = {
        loading,
        getTotalCartItem,
        getTotalCartAmount,
        all_product: products,
        cartItems,
        addToCart,
        removeFromCart,
        clearCart 
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;