import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // ✅ استدعاء أيقونة السلة

function Navbar() {
  return (
    <nav
      style={{
        width: "100vw",
        backgroundColor: "#ffffffff", // وردي فاتح
        padding: "1rem 2rem",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2 style={{ margin: 0, color: "#d81b60" }}>SCARPE</h2>

        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link to="/" style={linkStyle}>Home</Link>
          <Link to="/products" style={linkStyle}>Products</Link>
          <Link to="/about" style={linkStyle}>About</Link>
          <Link to="/contact" style={linkStyle}>Contact</Link>
          <Link to="/cart" style={{ ...linkStyle, display: "flex", alignItems: "center", gap: "5px" }}>
            <FaShoppingCart /> Cart
          </Link>
        </div>
      </div>
    </nav>
  );
}

const linkStyle = {
  textDecoration: "none",
  color: "#880e4f",
  fontWeight: "600",
  fontSize: "16px",
};

export default Navbar;
