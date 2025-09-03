// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ إضافة منتج (مع كمية)
  const addToCart = (product) => {
    setCart((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        // لو المنتج موجود نزود الكمية
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // لو مش موجود نضيفه بكمية 1
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  // ✅ إزالة منتج (لو الكمية > 1 يقللها)
  const removeFromCart = (id) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // يمسحه لو وصل 0
    );
  };

  // ✅ حذف المنتج بالكامل من الكارت
  const clearItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // ✅ تفريغ الكارت كله
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearItem, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
