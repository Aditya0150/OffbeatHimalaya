import React from 'react';
import KuariImage from "../Itinerary/KuariPass1.jpg";
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

function KuariPassTrek() {
  return (
    <div className="container">
      <h1 className="main-heading">Kuari Pass Trek – 5 Nights / 6 Days</h1>
      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About Kuari Pass</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              Kuari Pass is one of the most scenic and beginner-friendly treks in Uttarakhand. It offers breathtaking views of snow-capped peaks including Nanda Devi, Dronagiri, and Kamet, and passes through oak forests, meadows, and traditional villages.
            </p>
            <div className="highlight-stats">
              <div className="highlight-stat">
                <Mountain className="highlight-icon" />
                <div><span className="highlight-number">12,516</span><span className="highlight-label">ft Altitude</span></div>
              </div>
              <div className="highlight-stat">
                <Calendar className="highlight-icon" />
                <div><span className="highlight-number">6</span><span className="highlight-label">Days Trek</span></div>
              </div>
              <div className="highlight-stat">
                <TreePine className="highlight-icon" />
                <div><span className="highlight-number">Panoramic</span><span className="highlight-label">Views</span></div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={KuariImage} alt="Kuari Pass View" className="nature-image" />
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>

        {[
          {
            day: 1,
            title: "Rishikesh to Joshimath",
            subtitle: "Base Arrival",
            details: [
              { icon: <Route />, label: "Distance", value: "255 km" },
              { icon: <Clock />, label: "Duration", value: "9–10 hrs" },
              { icon: <Home />, label: "Stay", value: "Joshimath" }
            ],
            bullets: [
              "Drive along Alaknanda river",
              "Stay in hotel/guesthouse"
            ]
          },
          {
            day: 2,
            title: "Joshimath to Dhak → Gulling",
            subtitle: "Trek Begins",
            details: [
              { icon: <Route />, label: "Drive", value: "12 km" },
              { icon: <Mountain />, label: "Trek", value: "5 km (3–4 hrs)" },
              { icon: <Home />, label: "Stay", value: "Camp at Gulling" }
            ],
            bullets: [
              "Oak forests and village trails",
              "First views of Dronagiri peak"
            ]
          },
          {
            day: 3,
            title: "Gulling to Tali Forest Camp",
            subtitle: "Deep Forest Trail",
            details: [
              { icon: <Mountain />, label: "Trek", value: "6 km (5 hrs)" },
              { icon: <Home />, label: "Stay", value: "Tali Forest Camp" }
            ],
            bullets: [
              "Walk through dense mixed forests",
              "Camp surrounded by alpine trees"
            ]
          },
          {
            day: 4,
            title: "Tali → Kuari Pass Summit → Tali",
            subtitle: "Summit Day",
            details: [
              { icon: <Mountain />, label: "Trek", value: "12 km round trip" },
              { icon: <Clock />, label: "Duration", value: "7 hrs" }
            ],
            bullets: [
              "Summit Kuari Pass (12,516 ft)",
              "Stunning view of Himalayan giants"
            ]
          },
          {
            day: 5,
            title: "Tali to Joshimath via Dhak",
            subtitle: "Descent & Transfer",
            details: [
              { icon: <Mountain />, label: "Trek", value: "11 km" },
              { icon: <Route />, label: "Drive", value: "12 km" },
              { icon: <Home />, label: "Stay", value: "Joshimath" }
            ],
            bullets: [
              "Final descent to base village",
              "Drive back to Joshimath"
            ]
          },
          {
            day: 6,
            title: "Joshimath to Rishikesh",
            subtitle: "Return Drive",
            details: [],
            bullets: [
              "Trip concludes with cherished mountain moments"
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
          <li>5 nights stay in camps/lodges</li>
          <li>All vegetarian meals during trek</li>
          <li>Transportation Rishikesh ↔ Joshimath</li>
          <li>Trekking permits, guides, and support staff</li>
        </ul>
      </section>
      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ Altitude caution:</p>
          <p>Acclimatization and hydration are key. Always follow guide's instructions.</p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials To Carry</h2>
        <ul className="list">
          <li>Warm clothes & thermals</li>
          <li>Trekking shoes, rain gear, 2L water bottles</li>
          <li>First-aid kit, torch, energy bars</li>
        </ul>
      </section>
      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">
            Price: <span className="price-highlight">₹9,999/-</span> (Ex-Rishikesh)
          </h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default KuariPassTrek;