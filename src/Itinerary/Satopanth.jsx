import React from 'react';
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

function Satopanth() {
  return (
    <div className="container">
      <h1 className="main-heading">Satopanth Lake Trek - 6 Nights / 7 Days</h1>
      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About Satopanth Lake</h2>
        <p className="section-text">
          Satopanth Tal is a sacred glacial lake located at 15,100 ft near Chaukhamba massif in Uttarakhand. 
          Surrounded by majestic peaks and rich mythology, this trek offers a unique blend of natural beauty and spiritual experience.
          Legend holds that the Trimurti—Brahma, Vishnu, and Mahesh—meditate here. The trek begins at Badrinath and passes through Mana, India's last village.
        </p>
        <div className="highlight-stats">
          <div className="highlight-stat">
            <Mountain className="highlight-icon" />
            <div><span className="highlight-number">15,100</span><span className="highlight-label">ft Altitude</span></div>
          </div>
          <div className="highlight-stat">
            <Calendar className="highlight-icon" />
            <div><span className="highlight-number">7</span><span className="highlight-label">Days Trek</span></div>
          </div>
          <div className="highlight-stat">
            <TreePine className="highlight-icon" />
            <div><span className="highlight-number">High</span><span className="highlight-label">Spiritual Significance</span></div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>

        {[
          {
            day: 1,
            title: "Haridwar to Joshimath",
            subtitle: "Drive Through Scenic Valleys",
            details: [
              { icon: <Route />, label: "Distance", value: "275 km" },
              { icon: <Clock />, label: "Duration", value: "9–10 hrs" },
              { icon: <Home />, label: "Stay", value: "Joshimath Hotel" }
            ],
            bullets: [
              "Scenic drive via Devprayag, Rudraprayag",
              "Overnight stay in Joshimath"
            ]
          },
          {
            day: 2,
            title: "Joshimath → Badrinath",
            subtitle: "Darshan and Acclimatization",
            details: [
              { icon: <Route />, label: "Drive", value: "45 km (1.5 hrs)" },
              { icon: <Home />, label: "Stay", value: "Badrinath" }
            ],
            bullets: [
              "Darshan at Badrinath Temple",
              "Visit Mana Village, last village of India",
              "Stay overnight for acclimatization"
            ]
          },
          {
            day: 3,
            title: "Badrinath → Lakshmi Van (Trek)",
            subtitle: "Trek Begins",
            details: [
              { icon: <Mountain />, label: "Trek", value: "9 km" },
              { icon: <Home />, label: "Stay", value: "Camp at Lakshmi Van" }
            ],
            bullets: [
              "Trek via Vasudhara Falls and Saraswati River",
              "Camping at Lakshmi Van in alpine terrain"
            ]
          },
          {
            day: 4,
            title: "Lakshmi Van → Chakrateerth",
            subtitle: "Alpine Ascent",
            details: [
              { icon: <Mountain />, label: "Trek", value: "10 km" },
              { icon: <Home />, label: "Stay", value: "Camp at Chakrateerth" }
            ],
            bullets: [
              "Trek past Bhim Pul and Sahastradhara",
              "Spectacular views of Chaukhamba massif"
            ]
          },
          {
            day: 5,
            title: "Chakrateerth → Satopanth Lake → Chakrateerth",
            subtitle: "Main Trek Day",
            details: [
              { icon: <Mountain />, label: "Trek", value: "8 km (round trip)" },
              { icon: <Clock />, label: "Duration", value: "7–8 hrs" }
            ],
            bullets: [
              "Visit to Satopanth Tal (15,100 ft)",
              "Return back to Chakrateerth base"
            ]
          },
          {
            day: 6,
            title: "Chakrateerth → Badrinath",
            subtitle: "Return Trek",
            details: [
              { icon: <Mountain />, label: "Trek", value: "16–17 km" },
              { icon: <Home />, label: "Stay", value: "Badrinath Hotel" }
            ],
            bullets: [
              "Long descent trek via Lakshmi Van",
              "Hot food and rest at Badrinath"
            ]
          },
          {
            day: 7,
            title: "Badrinath to Haridwar",
            subtitle: "End of Trek",
            details: [
              { icon: <Route />, label: "Drive", value: "275 km (10 hrs)" }
            ],
            bullets: [
              "Early morning departure",
              "Drop at Haridwar by evening"
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
          <li>Accommodation: 6 nights (Hotel + Camp combination)</li>
          <li>Meals: Veg breakfast, dinner, tea/snacks</li>
          <li>Transport: Pickup/drop from Haridwar</li>
          <li>Trekking Gear: Tents, mats, kitchen staff</li>
          <li>Guides: Certified trek leaders & support crew</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials to Carry</h2>
        <ul className="list">
          <li>Thermal wear, woolens, waterproof jackets</li>
          <li>Sturdy trekking shoes, extra socks</li>
          <li>Rain gear, trekking pole, flashlight</li>
          <li>Personal medical kit, ID, sunscreen</li>
          <li>Power bank, 2L water bottles, dry fruits</li>
        </ul>
      </section>
      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ Carry sufficient cash!</p>
          <p>ATMs and network facilities are not available beyond Badrinath. Keep all essentials and money ready before starting the trek.</p>
        </div>
      </section>
      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">
            Price: <span className="price-highlight">₹18,999/-</span> (Ex-Haridwar)
          </h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Satopanth;