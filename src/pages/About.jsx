import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain, Users, MapPin, Leaf, Phone, Mail } from 'lucide-react';
import "../styles/About.css";

const AboutSection = () => {
  const features = [
    { icon: Mountain, title: "Unique Himalayan Adventures", description: "Discover hidden trails away from the crowds." },
    { icon: Users, title: "Experienced Local Guides", description: "Certified experts ensuring a safe and immersive trek." },
    { icon: MapPin, title: "Custom Trekking Plans", description: "From weekend getaways to high-altitude expeditions." },
    { icon: Leaf, title: "Sustainable Travel", description: "Eco-friendly tourism supporting local communities." }
  ];

  const treks = [
    "Kedarkantha", "Valley of Flowers", "Gaumukh Tapovan", "Satopanth",
    "Dronagiri Base Camp", "Kagbhusandi", "Kuari Pass", "Har Ki Dun", "Roopkund"
  ];

  return (
    <section className="about-page enhanced">
      <header className="about-banner">
        <h1>About Off Beat Himalaya</h1>
        <p>Explore the untouched beauty of Uttarakhand with us!</p>
      </header>

      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          At <strong>Off Beat Himalaya</strong>, we take you beyond the usual tourist trails into the heart of the Himalayas.
          Our goal is to offer authentic trekking experiences that connect you with nature, local culture, and breathtaking landscapes.
          Whether you're a seasoned trekker or an adventure enthusiast, we ensure a journey filled with unforgettable moments.
        </p>
      </section>

      <section className="about-section">
        <h2>Our Treks & Adventures</h2>
        <p>
          From the snowy peaks of Kedarkantha and the blooming Valley of Flowers, to the sacred trails of Gaumukh Tapovan and Satopanth,
          Off Beat Himalaya curates unforgettable journeys across the Himalayas.
        </p>
        <div className="trek-tags">
          {treks.map((trek, idx) => (
            <span className="trek-tag" key={idx}>{trek}</span>
          ))}
        </div>
      </section>

      <section className="about-section">
        <h2>Why Choose Us?</h2>
        <div className="features-grid enhanced-icons">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div className="feature-item enhanced" key={idx}>
                <Icon className="icon-enhanced" />
                <div className="feature-title">{feature.title}</div>
                <p className="feature-description">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="about-section">
        <h2>Contact Us</h2>
        <div className="contact-links">
          <a href="https://wa.me/918126417109" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Phone /> <span>+91 8126417109</span>
          </a>
          <a href="mailto:Yogerawat4@gmail.com" className="contact-link email">
            <Mail /> <span>Yogerawat4@gmail.com</span>
          </a>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-card">
          <h3>Ready for Your Next Adventure?</h3>
          <p>Join us for an unforgettable journey through the majestic Himalayas</p>
          <Link to="/contact" className="cta-button">Contact Us Now</Link>
        </div>
      </section>
    </section>
  );
};

export default AboutSection;