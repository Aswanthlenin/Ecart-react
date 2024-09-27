import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import Checkout from "./pages/Checkout";
import { CartProvider } from "./context/CartContext";

function App() {
  const [cartItems] = useState(() => {
    const savedItems = localStorage.getItem("cartItems");
    return savedItems ? JSON.parse(savedItems) : [];
  });
  // console.log("Cart===", cartItems.length);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  // const addToCart = (product) => {
  //   setCartItems((prev) => [...prev, product]);
  // };

  // const removeFromCart = (product) => {
  //   setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  // };
  return (
    <CartProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
