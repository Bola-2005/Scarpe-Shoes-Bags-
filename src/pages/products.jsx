// src/pages/Products.jsx
import React, { useState } from "react";
import { useCart } from "../context/cartcontext";

function Products() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState("");


  const heels = [
    { id: 1, name: "Silver Heels", price: "500 EGP", image: "/heels.jpg" },
    { id: 2, name: "Black Heels", price: "600 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.36_1ef25c50.jpg" },
    { id: 3, name: "Golden Heels", price: "550 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.36_96fc9306.jpg" },
    { id: 4, name: "Black Heels", price: "650 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.37_1fe24e81.jpg" },
    { id: 5, name: "Golden Heels", price: "700 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.36_ff0d326b.jpg" },
    { id: 6, name: "Golden Heels", price: "550 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.37_5e38d032.jpg" },
    { id: 7, name: "Black Heels", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.37_65a01db6.jpg" },
    { id: 8, name: "Brown Heels", price: "800 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.37_c2597c57.jpg" },
    { id: 9, name: "White Heels", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.38_77b4f020.jpg" },
    { id: 10, name: "Brown Heels", price: "755", image: "/WhatsApp Image 2025-08-20 at 03.45.38_716d2576.jpg" },
    { id: 11, name: "Burgundy Heels", price: "800 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.38_7637d457.jpg" },
    { id: 12, name: "Silver Heels", price: "600 EGP", image: "/WhatsApp Image 2025-08-20 at 03.45.38_f8e39c45.jpg" },
  ];

  const sneakers = [
    { id: 1, name: "White Samba", price: "450 EGP", image: "/WhatsApp Image 2025-08-26 at 16.21.31_4e79aa5d.jpg" },
    { id: 2, name: "Pink Samba", price: "400 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.51_76d3f5b4.jpg" },
    { id: 3, name: "White Sneekrs", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.51_26208b89.jpg" },
    { id: 4, name: "White Sneekrs", price: "450 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.51_c77dc563.jpg" },
    { id: 5, name: "Gliter", price: "300 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.52_2fead363.jpg" },
    { id: 6, name: "", price: "450 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.52_42c892ee.jpg" },
    { id: 7, name: "Gliter", price: "300 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.52_597c2a70.jpg" },
    { id: 8, name: "Samba", price: "450 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.52_731fdaad.jpg" },
    { id: 9, name: "White Sneekrs", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.52_22127cdc.jpg" },
    { id: 10, name: "", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.52_fc8c647c.jpg" },
    { id: 11, name: "", price: "350 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.53_26b821c4.jpg" },
    { id: 12, name: "", price: "250 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.53_ac53b501.jpg" },
    { id: 13, name: "Gliter", price: "300 EGP", image: "/WhatsApp Image 2025-08-20 at 03.46.53_cb101544.jpg" },
  ];

  const bags = [
    { id: 1, name: "Brown Bag", price: "600 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.15_ace74e89.jpg" },
    { id: 2, name: "Wihte Bag", price: "550 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.18_06441835.jpg" },
    { id: 3, name: "Pink Bag", price: "460 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.19_26c64cc3.jpg" },
    { id: 4, name: "", price: "700 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.21_6f19439c.jpg" },
    { id: 5, name: "Black Bag", price: "450 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.22_2ef58645.jpg" },
    { id: 6, name: "Black Bag", price: "700 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.22_3d41cbdd.jpg" },
    { id: 7, name: "", price: "650 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.22_32e7abcb.jpg" },
    { id: 8, name: "", price: "550 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.22_112687ff.jpg" },
    { id: 9, name: "", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.23_3d5e9769.jpg" },
    { id: 10, name: "", price: "450 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.23_7f51742f.jpg" },
    { id: 11, name: "Black Bag", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.23_3453477c.jpg" },
    { id: 12, name: "Beige Bag", price: "600 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.23_b673a01b.jpg" },
    { id: 13, name: "Beige Bag", price: "400 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.23_d9107c15.jpg" },
    { id: 14, name: "Pink Bag", price: "450 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.24_9e7b845a.jpg" },
    { id: 15, name: "Black Bag", price: "500 EGP", image: "/WhatsApp Image 2025-08-20 at 03.47.24_cdb5aeb3.jpg" },
  ];
   // دالة عرض المنتجات
  const renderProducts = (items) => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "25px",
        marginTop: "20px",
        width: "100%",
        maxWidth: "1200px",
      }}
    >
      {items.map((product) => (
        <div
          key={product.id}
          style={{
            backgroundColor: "#fff0f5", // كارت بمبي فاتح
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(255, 182, 193, 0.3)",
            overflow: "hidden",
            textAlign: "center",
            transition: "transform 0.3s, box-shadow 0.3s",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-8px)";
            e.currentTarget.style.boxShadow =
              "0 8px 16px rgba(255, 105, 180, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow =
              "0 4px 12px rgba(255, 182, 193, 0.3)";
          }}
        >
          <img
            src={product.image}
            alt={product.name}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <h3 style={{ margin: "15px 0 10px", color: "#c71585" }}>
            {product.name}
          </h3>
          <p style={{ color: "#555", marginBottom: "10px" }}>
            {product.price} EGP
          </p>
          <button
            onClick={() => addToCart(product)}
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff69b4",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "transform 0.2s, background-color 0.3s",
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.9)")}
            onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff85c1")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff69b4")
            }
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <div
      style={{
        backgroundColor: "#ffeef4", // نفس خلفية الـ Home
        minHeight: "100vh",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          color: "#c71585",
          marginBottom: "30px",
        }}
      >
        Our Products
      </h1>

      {/* أزرار التصنيفات */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        <button
          onClick={() => setCategory("heels")}
          style={{
            padding: "10px 20px",
            backgroundColor: category === "heels" ? "#ff69b4" : "#fff",
            color: category === "heels" ? "#fff" : "#c71585",
            border: "2px solid #ff69b4",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s",
          }}
        >
          👠 Heels
        </button>
        <button
          onClick={() => setCategory("sneakers")}
          style={{
            padding: "10px 20px",
            backgroundColor: category === "sneakers" ? "#ff69b4" : "#fff",
            color: category === "sneakers" ? "#fff" : "#c71585",
            border: "2px solid #ff69b4",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s",
          }}
        >
          👟 Sneakers
        </button>
        <button
          onClick={() => setCategory("bags")}
          style={{
            padding: "10px 20px",
            backgroundColor: category === "bags" ? "#ff69b4" : "#fff",
            color: category === "bags" ? "#fff" : "#c71585",
            border: "2px solid #ff69b4",
            borderRadius: "8px",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s",
          }}
        >
          👜 Bags
        </button>
      </div>

{category === "" && (
  <p
    style={{
      fontSize: "2rem",            // أصغر حجم
      color: "#1f1313ff",
      textAlign: "center",
      marginTop: "20px",           // قريب جدًا من الأزرار
      fontStyle: "italic",        // خط مائل
    }}
  >
    👆 Select a section from above to view products
  </p>
)}

      {category === "heels" && renderProducts(heels)}
      {category === "sneakers" && renderProducts(sneakers)}
      {category === "bags" && renderProducts(bags)}
    </div>
  );
}

export default Products;