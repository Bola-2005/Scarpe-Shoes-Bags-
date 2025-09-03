import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const cards = [
    {
      title: "Bags",
      image: "/images/bags.jpg",
    },
    {
      title: "Sneekrs",
      image: "/images/sneekrs.jpg",
    },

    {
      title: "Heels",
      image: "/images/shoes.jpg",
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#ffeef4", // خلفية بمبي ناعم
        minHeight: "100vh",
        width: "100%",
        margin: 0,
        padding: "0 0 40px", // ✅ إزالة padding-top
        fontFamily: "'Arial', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
{/* Logo / Banner */}
<div
  style={{
    width: "100%",                // عرض الصفحة كله
    maxWidth: "1200px",           // أقصى عرض للبنر
    height: "400px",              // ارتفاع البانر
    margin: "0 auto 30px",        // توسيط + مسافة تحت
    borderRadius: "12px",         // زوايا ناعمة
    overflow: "hidden",           // عشان ميظهرش أي زيادات من الصورة
    backgroundImage: "url('/images/485695656_122100901820808773_2241652181295358967_n.jpg')", 
    backgroundSize: "cover",      // الصورة تملأ المساحة بشكل أنيق
    backgroundPosition: "center", // توسيط الصورة
    backgroundRepeat: "no-repeat",
    backgroundColor: "#f8f8f8",   // خلفية فاتحة لو فيه فراغ
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)" // ظل خفيف للبنر
  }}
></div>

      {/* Best Collection Title */}
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "#c71585", // وردي غامق
          lineHeight: "1.2",
          marginBottom: "40px",
          textAlign: "center",
        }}
      >
        Best <br /> Collection
      </h1>

      {/* Cards Section */}
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff0f5", // خلفية الكارت بمبي فاتح
              borderRadius: "15px",
              boxShadow: "0 4px 12px rgba(255, 182, 193, 0.3)", // ظل وردي ناعم
              width: "260px",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onClick={() => navigate("/products")}
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
              src={card.image}
              alt={card.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
              }}
            />
            <div
              style={{
                padding: "15px",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  margin: "10px 0",
                  fontSize: "1.5rem",
                  color: "#d63384", // لون العنوان وردي فاقع
                }}
              >
                {card.title}
              </h2>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigate("/products");
                }}
                style={{
                  marginTop: "10px",
                  padding: "8px 16px",
                  backgroundColor: "#ff69b4", // لون الزر بمبي واضح
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "0.95rem",
                  cursor: "pointer",
                  transition: "background-color 0.3s",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#ff85c1")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "#ff69b4")
                }
              >
                Discover More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
