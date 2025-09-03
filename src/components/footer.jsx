// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#ffffffff", // وردي فاتح
        color: "#6d214f", // لون غامق متناسق
        padding: "40px 20px",
        marginTop: "60px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Left - Logo and description */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h2 style={{ marginBottom: "10px", fontSize: "24px", color: "#c44569" }}>
            Scarpe
          </h2>
          <p style={{ fontSize: "14px", lineHeight: "1.6" }}>
            A modern store for shoes and bags. Designed with love.
          </p>
        </div>

        {/* Middle - Navigation links */}
        <div style={{ flex: "1 1 150px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#c44569" }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li>
              <Link to="/about" style={{ color: "#6d214f", textDecoration: "none" }}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" style={{ color: "#6d214f", textDecoration: "none" }}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/products" style={{ color: "#6d214f", textDecoration: "none" }}>
                Products
              </Link>
            </li>
          </ul>
        </div>

        {/* Right - Social icons */}
        <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
          <h3 style={{ fontSize: "18px", marginBottom: "10px", color: "#c44569" }}>
            Follow Us
          </h3>
          <a
            href="https://www.facebook.com/share/1CWdwjoGf7/?mibextid=wwXIfr"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#6d214f",
              marginRight: "15px",
              fontSize: "20px",
              display: "inline-block",
            }}
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/scarpe.shop.eg?igsh=dDk2Zmo4YTB4dGE4"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#6d214f",
              fontSize: "20px",
              display: "inline-block",
            }}
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Bottom - Copyright */}
      <div
        style={{
          textAlign: "center",
          borderTop: "1px solid #eac1d3",
          paddingTop: "20px",
          fontSize: "14px",
          color: "#6d214f",
        }}
      >
        © {new Date().getFullYear()} Scarpe. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
