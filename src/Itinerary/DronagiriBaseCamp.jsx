import React from 'react';
import DronagiriImage from "../Itinerary/Dronagiri1.jpg";
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

function DronagiriTrek() {
  return (
    <div className="container">
      <h1 className="main-heading">Dronagiri Base Camp Trek – 6 Nights / 7 Days</h1>
      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About Dronagiri Base Camp</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              The Dronagiri Base Camp Trek is a hidden gem nestled in Uttarakhand. This offbeat trail takes you through ancient villages, dense alpine forests, and offers majestic views of the Dronagiri peak — a place deeply rooted in mythology and untouched serenity.
            </p>
            <div className="highlight-stats">
              <div className="highlight-stat">
                <Mountain className="highlight-icon" />
                <div><span className="highlight-number">15,000</span><span className="highlight-label">ft Altitude</span></div>
              </div>
              <div className="highlight-stat">
                <Calendar className="highlight-icon" />
                <div><span className="highlight-number">7</span><span className="highlight-label">Days Trek</span></div>
              </div>
              <div className="highlight-stat">
                <TreePine className="highlight-icon" />
                <div><span className="highlight-number">Offbeat</span><span className="highlight-label">Trail</span></div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={DronagiriImage} alt="Dronagiri Base Camp" className="nature-image" />
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>

        {[
          {
            day: 1,
            title: "Rishikesh to Jumma via Joshimath",
            subtitle: "Drive Day",
            details: [
              { icon: <Route />, label: "Distance", value: "270 km" },
              { icon: <Clock />, label: "Duration", value: "10-11 hrs" },
              { icon: <Home />, label: "Stay", value: "Homestay at Jumma" }
            ],
            bullets: [
              "Scenic drive through Alaknanda Valley",
              "Overnight at remote mountain village"
            ]
          },
          {
            day: 2,
            title: "Jumma to Dronagiri Village",
            subtitle: "Trek Starts",
            details: [
              { icon: <Mountain />, label: "Trek", value: "8 km (5 hrs)" },
              { icon: <Home />, label: "Stay", value: "Dronagiri Village" }
            ],
            bullets: [
              "Ascend through terraced farms and forests",
              "Explore the legendary village of Dronagiri"
            ]
          },
          {
            day: 3,
            title: "Dronagiri to Langatuli",
            subtitle: "Deeper into the Wild",
            details: [
              { icon: <Mountain />, label: "Trek", value: "6 km (4 hrs)" },
              { icon: <Home />, label: "Stay", value: "Campsite" }
            ],
            bullets: [
              "Gradual trail through lush meadows",
              "High mountain views throughout"
            ]
          },
          {
            day: 4,
            title: "Langatuli to Dronagiri Base Camp",
            subtitle: "Highlight Day",
            details: [
              { icon: <Mountain />, label: "Trek", value: "5 km (3-4 hrs)" }
            ],
            bullets: [
              "Arrive at the majestic Dronagiri Base",
              "Views of Hathi-Ghoda & Dronagiri peak"
            ]
          },
          {
            day: 5,
            title: "Exploration & Return to Dronagiri",
            subtitle: "Leisure & Descent",
            details: [
              { icon: <Clock />, label: "Duration", value: "6 hrs round trip" }
            ],
            bullets: [
              "Explore the region and descend to Dronagiri Village"
            ]
          },
          {
            day: 6,
            title: "Dronagiri to Jumma, Drive to Joshimath",
            subtitle: "Return Journey",
            details: [],
            bullets: [
              "Final descent and transfer to Joshimath",
              "Night stay at Joshimath"
            ]
          },
          {
            day: 7,
            title: "Joshimath to Rishikesh",
            subtitle: "Trek Ends",
            details: [],
            bullets: [
              "Drive back to Rishikesh",
              "Trip ends with Himalayan memories"
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
          <li>6 nights stay (homestays, tents, lodges)</li>
          <li>Vegetarian meals from Day 1 dinner to Day 7 breakfast</li>
          <li>Rishikesh to Jumma and back transport</li>
          <li>Local certified trek guides and porters</li>
          <li>Trekking permits and eco-fees</li>
        </ul>
      </section>
      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ Remote & Less Commercial Trek</p>
          <p>Expect limited network and basic amenities. Come prepared for raw Himalayan beauty.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials To Carry</h2>
        <ul className="list">
          <li>Thermal wear, woollen gloves, trek boots</li>
          <li>Rain jacket, water bottles, quick-dry clothing</li>
          <li>Headlamp, personal medication, snacks</li>
        </ul>
      </section>

      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">
            Price: <span className="price-highlight">₹11,999/-</span> (Ex-Rishikesh)
          </h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default DronagiriTrek;