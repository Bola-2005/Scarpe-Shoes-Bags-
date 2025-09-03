// src/pages/Cart.jsx
import React from "react";
import { useCart } from "../context/cartcontext.jsx";

function Cart() {
  const { cart, addToCart, removeFromCart, clearItem, clearCart } = useCart();

  // ✅ حساب الإجمالي الكلي
  const total = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1 style={{ textAlign: "center" }}>My Cart</h1>

      {cart.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "20px" }}>
          Your cart is currently empty.
        </p>
      ) : (
        <>
          <div
            className="products-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {cart.map((item) => (
              <div
                key={item.id}
                className="product-card"
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "10px",
                  padding: "15px",
                  textAlign: "center",
                }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />
                <h5 style={{ margin: "10px 0" }}>{item.name}</h5>
                <p style={{ color: "#555" }}>Price: {item.price} EGP</p>
                <p style={{ fontWeight: "bold" }}>
                  Quantity: {item.quantity}
                </p>
                <p>
                  Total:{" "}
                  <strong>
                    {parseFloat(item.price) * item.quantity} EGP
                  </strong>
                </p>

                <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
                  <button
                    style={{
                      backgroundColor: "#28a745",
                      border: "none",
                      padding: "6px 10px",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => addToCart(item)}
                  >
                    +
                  </button>
                  <button
                    style={{
                      backgroundColor: "#ffc107",
                      border: "none",
                      padding: "6px 10px",
                      color: "black",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => removeFromCart(item.id)}
                  >
                    -
                  </button>
                  <button
                    style={{
                      backgroundColor: "#dc3545",
                      border: "none",
                      padding: "6px 10px",
                      color: "white",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                    onClick={() => clearItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ✅ إجمالي الكارت */}
          <div style={{ marginTop: "30px", textAlign: "center" }}>
            <h3>Total: {total} EGP</h3>
            <button
              style={{
                backgroundColor: "#000",
                border: "none",
                padding: "10px 20px",
                color: "white",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
