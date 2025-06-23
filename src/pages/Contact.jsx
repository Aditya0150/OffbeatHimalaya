import React, { useState } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";
import "../styles/Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("sending");
    try {
      const response = await fetch("https://formspree.io/f/mldjlqqp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", address: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <div className="overlay">
        <div className="contact-left">
          <h2>Contact Us</h2>
          <p>We're here to help you plan your Himalayan adventure. Reach out!</p>
          <div className="contact-detail">
            <FaPhone className="icon" /> <span>+91 8126417109</span>
          </div>
          <div className="contact-detail">
            <FaEnvelope className="icon" /> <span>Yogerawat4@gmail.com</span>
          </div>
          <div className="contact-detail">
            <FaMapMarkerAlt className="icon" /> <span>Uttarakhand, India</span>
          </div>
          <div className="social-links">
            <a href="https://wa.me/918126417109" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/offbeat_himalaya/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="mailto:Yogerawat4@gmail.com"><FaEnvelope /></a>
          </div>
        </div>

        <div className="contact-right">
          <form onSubmit={handleSubmit}>
            <h2>Send Us a Message</h2>
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
            <input type="text" name="address" placeholder="Your Address" required value={formData.address} onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
            <button type="submit" disabled={formStatus === "sending"}>
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
            {formStatus === "success" && <p className="success">Message sent successfully!</p>}
            {formStatus === "error" && <p className="error">Error sending message. Please try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;