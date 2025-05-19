// Contactinfo.jsx
import React from "react";
import { FaPhone, FaEnvelope} from "react-icons/fa";

const Contactinfo = () => {
  return (
    <div className="contact-info">
      <h2>Get in Touch</h2>
      <div className="contact-detail">
        <FaPhone className="icon" />
        <p>
          <strong></strong>
          <a
            href="https://wa.me/918126417109"
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
          <a href="mailto:Yogerawat4@gmail.com?subject=Inquiry&body=Hello">
            Yogerawat4@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default Contactinfo;