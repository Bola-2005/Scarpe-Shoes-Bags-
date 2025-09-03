// src/App.jsx
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/footer"; 
import Home from "./pages/home";
import Products from "./pages/products";
import Contact from "./pages/contact";
import NotFound from "./pages/notfound";
import About from "./pages/about"; 
import Cart from "./pages/cart";   

function App() {
  // حالة الكارت
  const [cart, setCart] = useState([]);

  // إضافة منتج للكارت
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // حذف منتج من الكارت
  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
