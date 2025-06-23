import React from 'react';
import { Link } from 'react-router-dom';
import {
  Mountain,
  MapPin,
  Clock,
  Users,
  TreePine,
  Calendar,
  Route,
  Home,
  AlertTriangle
} from 'lucide-react';
import '../styles/Valleyofflower.css';
import KAGBHUSANDI1 from '../Itinerary/kagbhusandi1.jpg';
function Kagbhusandi() {
  return (
    <div className="container">
      <h1 className="main-heading">Kagbhusandi Trek – 6 Nights / 7 Days</h1>
      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About the Kagbhusandi Trek</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              Kagbhusandi Lake is a hidden gem nestled in the Garhwal Himalayas near the Valley of Flowers.
              Known for its turquoise waters, mythological significance, and peaceful surroundings,
              the trek offers alpine meadows, ancient forests, and panoramic views of peaks like Hathi Parvat and Chaukhamba.
            </p>
            <div className="highlight-stats">
              <div className="highlight-stat">
                <Mountain className="highlight-icon" />
                <div><span className="highlight-number">17,000</span><span className="highlight-label">ft Altitude</span></div>
              </div>
              <div className="highlight-stat">
                <Calendar className="highlight-icon" />
                <div><span className="highlight-number">7</span><span className="highlight-label">Days Trek</span></div>
              </div>
              <div className="highlight-stat">
                <TreePine className="highlight-icon" />
                <div><span className="highlight-number">Secluded</span><span className="highlight-label">Alpine Lake</span></div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={KAGBHUSANDI1} alt="Kagbhusandi Lake" className="nature-image" />
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>

        {[
          {
            day: 1,
            title: "Rishikesh to Joshimath",
            subtitle: "Scenic Himalayan Drive",
            details: [
              { icon: <Route />, label: "Distance", value: "255 km" },
              { icon: <Clock />, label: "Duration", value: "9–10 hours" },
              { icon: <Home />, label: "Stay", value: "Joshimath" }
            ],
            bullets: [
              "Drive along Alaknanda River",
              "Witness Devprayag, Rudraprayag confluences",
              "Stay at hotel in Joshimath"
            ]
          },
          {
            day: 2,
            title: "Joshimath to Painka Village",
            subtitle: "Base for Kagbhusandi Trek",
            details: [
              { icon: <Route />, label: "Drive", value: "18 km" },
              { icon: <Home />, label: "Stay", value: "Campsite near Painka" }
            ],
            bullets: [
              "Drive to Painka or Govind Ghat",
              "Acclimatization walk",
              "Stay in tents"
            ]
          },
          {
            day: 3,
            title: "Painka to Bhyundar Khal",
            subtitle: "Ascent Begins",
            details: [
              { icon: <Mountain />, label: "Trek", value: "10 km (7–8 hrs)" },
              { icon: <TreePine />, label: "Altitude", value: "Approx. 12,000 ft" }
            ],
            bullets: [
              "Steep ascend through dense forests",
              "Stay in tents amidst pine and oak"
            ]
          },
          {
            day: 4,
            title: "Bhyundar Khal to Kagbhusandi Lake",
            subtitle: "Main Attraction",
            details: [
              { icon: <Mountain />, label: "Trek", value: "6 km" },
              { icon: <TreePine />, label: "Altitude", value: "17,000 ft" }
            ],
            bullets: [
              "Reach the pristine lake by early noon",
              "Explore surroundings, mythological tales",
              "Return to Bhyundar Khal for overnight stay"
            ]
          },
          {
            day: 5,
            title: "Bhyundar Khal to Painka",
            subtitle: "Return Trek",
            details: [
              { icon: <Mountain />, label: "Trek", value: "10 km" },
              { icon: <Home />, label: "Stay", value: "Painka" }
            ],
            bullets: ["Easy descent, forest trail"]
          },
          {
            day: 6,
            title: "Painka to Joshimath",
            subtitle: "Rest Day",
            details: [
              { icon: <Route />, label: "Drive", value: "18 km" },
              { icon: <Home />, label: "Stay", value: "Joshimath Hotel" }
            ],
            bullets: ["Rest and local exploration"]
          },
          {
            day: 7,
            title: "Joshimath to Rishikesh",
            subtitle: "Journey Ends",
            details: [],
            bullets: [
              "Drive back with memories",
              "End of trek with mountain blessings"
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
          <li>6 Nights stay: Hotels and alpine tents</li>
          <li>Veg meals: Breakfast, dinner, and snacks</li>
          <li>Transport: From Rishikesh and back</li>
          <li>Trek guides and local support crew</li>
        </ul>
      </section>
      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ Carry cash!</p>
          <p>No ATMs beyond Joshimath. Ensure you carry sufficient cash for the full journey.</p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials To Carry</h2>
        <ul className="list">
          <li>Warm clothes, waterproof trekking shoes</li>
          <li>Rain gear, torch/headlamp</li>
          <li>Reusable water bottles, personal meds</li>
          <li>Power bank, ID proof, dry snacks</li>
        </ul>
      </section>
      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">
            Price: <span className="price-highlight">₹13,499/-</span> (Rishikesh to Rishikesh)
          </h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Kagbhusandi;
