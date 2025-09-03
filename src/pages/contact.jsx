import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      style={{
        backgroundColor: "#ffeef4", // خلفية وردية ناعمة
        minHeight: "100vh",
        padding: "50px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          backgroundColor: "#fff0f5", // وردي فاتح
          padding: "40px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(255, 192, 203, 0.3)", // ظل وردي
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "30px",
            color: "#c71585", // وردي غامق شويه
            fontWeight: "bold",
          }}
        >
          Contact Us
        </h2>

        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ffb6c1", // وردي خفيف
              backgroundColor: "#fffafa", // لون ناعم
            }}
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
            required
            style={{
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ffb6c1",
              backgroundColor: "#fffafa",
            }}
          />
          <textarea
            name="message"
            value={formData.message}
            placeholder="Your Message"
            onChange={handleChange}
            required
            rows="5"
            style={{
              padding: "12px",
              fontSize: "1rem",
              borderRadius: "8px",
              border: "1px solid #ffb6c1",
              resize: "none",
              backgroundColor: "#fffafa",
            }}
          />
          <button
            type="submit"
            style={{
              padding: "12px",
              backgroundColor: "#ff69b4", // وردي فاقع
              color: "#fff",
              fontSize: "1rem",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              transition: "background-color 0.3s",
              fontWeight: "bold",
            }}
            onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff85c1")}
            onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff69b4")}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
