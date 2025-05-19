import React, { useState } from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import "../styles/Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://formspree.io/f/your-formspree-id", { // Replace with your Formspree form ID
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      alert("Error sending message.");
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <div className="contact-detail">
            <FaPhone className="icon" />
            <p>
              <strong>Phone:</strong>
              <a
                href="https://wa.me/918126417109"  // Replace with your WhatsApp link
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-link"
              >
                +91 8126417109
              </a>
            </p>
          </div>
          <div className="contact-detail">
            <FaEnvelope className="icon" />
            <p>
              <strong>Email:</strong>
              <a href="mailto:Yogerawat4@gmail.com?subject=Inquiry&body=Hello">  {/* Replace with your email */}
                Yogerawat4@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
            <textarea name="message" placeholder="Message" required value={formData.message} onChange={handleChange} />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;