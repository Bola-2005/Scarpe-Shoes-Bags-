import React from "react";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#ffeef4", // ✅ نفس الخلفية زي Home و Products
        minHeight: "100vh",
        padding: "40px 20px",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        color: "#333",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "20px",
          color: "#c71585", // وردي غامق زي العناوين في Home
        }}
      >
        About Scarpe
      </h1>
      
      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "30px",
          maxWidth: "600px",
          margin: "auto",
          lineHeight: "1.6",
        }}
      >
        Scarpe is a modern fashion store specializing in women's shoes and bags.
        Our collections are carefully selected to match elegance with everyday style.
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          marginTop: "30px",
          marginBottom: "10px",
          color: "#d63384",
        }}
      >
        📍 Address
      </h2>
      <p style={{ fontSize: "1.1rem" }}>
        الفيوم - لطف الله - شارع عصائر العملاق
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          marginTop: "30px",
          marginBottom: "10px",
          color: "#d63384",
        }}
      >
        🕒 Working Hours
      </h2>
      <p style={{ fontSize: "1.1rem" }}>
        Open daily from 10:00 AM to 10:00 PM
      </p>

      <h2
        style={{
          fontSize: "1.8rem",
          marginTop: "30px",
          marginBottom: "10px",
          color: "#d63384",
        }}
      >
        📞 Contact
      </h2>
      <p style={{ fontSize: "1.1rem" }}>
        Phone:{" "}
        <a
          href="tel:01098559985"
          style={{ color: "#c71585", textDecoration: "none", fontWeight: "bold" }}
        >
          01098559985
        </a>
        <br />
        Instagram:{" "}
        <a
          href="https://www.instagram.com/scarpe.shop.eg"
          target="_blank"
          rel="noreferrer"
          style={{ color: "#c71585", fontWeight: "bold" }}
        >
          @scarpe.shop.eg
        </a>
      </p>
    </div>
  );
}

export default About;
