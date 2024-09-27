import React, { createContext, useState, useEffect } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  //Search State
  const [searchTerm, setSearchTerm] = useState("");

  //Cart State
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];

    // console.log('Loaded cart==',storedCart)
    setCart(storedCart);
  }, []);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cart));
    // console.log('saving cart==', cart)
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0);
      return updatedCart;
    });
  };

    //Increment product quantity

  const incrementQuantity = (productId) =>{
    setCart((prevCart) =>
    prevCart.map(item =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 }:item))
  }

  // Decrement product quantity

  const decrementQuantity = (productId) =>{
    setCart((prevCart) =>
    prevCart.map(item =>
      item.id === productId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 }:item))
  }

    //Total Items Count
  const getTotalItems = ()=>{
    return cart.reduce((total, item) => total + item.quantity,0)
  }

  return (
    <CartContext.Provider
      value={{ searchTerm, setSearchTerm, cart, addToCart, removeFromCart , incrementQuantity,decrementQuantity , getTotalItems}}>
      {children}
    </CartContext.Provider>
  );
};
