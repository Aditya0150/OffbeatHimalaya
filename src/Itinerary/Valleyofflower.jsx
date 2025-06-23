import React from 'react';
import VOF1 from "../Itinerary/VOF1.jpg";
import { Link } from "react-router-dom";
import {
  Mountain,
  MapPin,
  Clock,
  Users,
  TreePine,
  Sun,
  Calendar,
  Route,
  Home,
  AlertTriangle
} from 'lucide-react';
import '../styles/Valleyofflower.css';

function ValleyOfFlowers() {
  return (
    <div className="container">
      <h1 className="main-heading">Valley of Flowers Trek - 4 Nights / 5 Days</h1>
      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About the Valley of Flowers</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              The Valley of Flowers, located in Uttarakhand's Chamoli district and part of the Nanda Devi Biosphere Reserve,
              is famous for its vibrant meadows blooming with over 500 species of wildflowers during monsoon.
              A moderate trek ideal for nature lovers seeking beauty, peace, and a unique alpine experience.
            </p>
            <div className="highlight-stats">
              <div className="highlight-stat">
                <Mountain className="highlight-icon" />
                <div><span className="highlight-number">11,500</span><span className="highlight-label">ft Altitude</span></div>
              </div>
              <div className="highlight-stat">
                <Calendar className="highlight-icon" />
                <div><span className="highlight-number">5</span><span className="highlight-label">Days Trek</span></div>
              </div>
              <div className="highlight-stat">
                <TreePine className="highlight-icon" />
                <div><span className="highlight-number">500+</span><span className="highlight-label">Species</span></div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={VOF1} alt="Valley-of-flower"
            className="nature-image"
            />
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>

        {[
          {
            day: 1,
            title: "Rishikesh to Joshimath",
            subtitle: "Journey to the Gateway",
            details: [
              { icon: <Route />, label: "Distance", value: "255 km" },
              { icon: <Clock />, label: "Duration", value: "9–10 hours" },
              { icon: <Home />, label: "Stay", value: "Joshimath" }
            ],
            bullets: [
              "Start early (around 5:00 AM)",
              "Scenic drive through confluences",
              "Devprayag → Rudraprayag → Karnaprayag",
              "Stay in hotel/guesthouse"
            ]
          },
          {
            day: 2,
            title: "Joshimath → Poolna → Ghangaria",
            subtitle: "Trek Begins",
            details: [
              { icon: <Route />, label: "Drive", value: "38 km (1.5 hrs)" },
              { icon: <Mountain />, label: "Trek", value: "9 km (~5–6 hrs)" },
              { icon: <Home />, label: "Stay", value: "Ghangaria" }
            ],
            bullets: [
              "Trek through forest & river paths",
              "Reach basecamp at Ghangaria"
            ]
          },
          {
            day: 3,
            title: "Valley of Flowers Exploration",
            subtitle: "The Main Attraction",
            details: [
              { icon: <Mountain />, label: "Distance", value: "7.5 km round trip" },
              { icon: <Clock />, label: "Duration", value: "6 hours" },
              { icon: <TreePine />, label: "Altitude", value: "11,500 ft" }
            ],
            bullets: [
              "Wildflower meadows in full bloom",
              "Rare Himalayan flora and fauna",
              "Breathtaking mountain views"
            ]
          },
          {
            day: 4,
            title: "Ghangaria → Poolna → Joshimath",
            subtitle: "Return Journey",
            details: [
              { icon: <Mountain />, label: "Trek", value: "9 km" },
              { icon: <Route />, label: "Drive", value: "1.5 hours" },
              { icon: <Home />, label: "Stay", value: "Joshimath" }
            ],
            bullets: ["Return to base, overnight stay"]
          },
          {
            day: 5,
            title: "Joshimath to Rishikesh",
            subtitle: "Journey Ends",
            details: [],
            bullets: [
              "Return drive to Rishikesh",
              "Memories of an unforgettable Himalayan trek"
            ]
          }
        ].map(({ day, title, subtitle, details, bullets }) => (
          <div key={day} className="itinerary-card">
            <div className="itinerary-header">
              <div className="day-circle">{day}</div>
              <div className="itinerary-day-info">
                <h3>{title}</h3>
                <p className="itinerary-subtitle">{subtitle}</p>
              </div>
            </div>
            <div className="info-grid">
              {details.map((d, idx) => (
                <div key={idx} className="info-item">
                  {d.icon}
                  <div className="info-content">
                    <span className="info-label">{d.label}</span>
                    <span className="info-value">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>
            <ul>
              {bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="section">
        <h2 className="section-title"><Users /> Inclusions</h2>
        <ul className="list">
          <li>Accommodation: 4 nights in hotels/camps</li>
          <li>Meals: Veg breakfast & dinner, evening snacks</li>
          <li>Transportation: Rishikesh pickup & drop</li>
          <li>Support staff: Local guides & trek leaders</li>
        </ul>
      </section>
      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ Carry cash at all times!</p>
          <p>ATMs are scarce in the mountains. Plan ahead to avoid inconvenience.</p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials To Carry</h2>
        <ul className="list">
          <li>Warm jacket, cap, gloves</li>
          <li>Trekking shoes (grip & waterproof)</li>
          <li>Raincoat, backpack, 2L water bottle</li>
          <li>Sunscreen, power bank, ID proof</li>
        </ul>
      </section>
      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">
            Price: <span className="price-highlight">₹10,999/-</span> (Rishikesh to Rishikesh)
          </h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}
export default ValleyOfFlowers;