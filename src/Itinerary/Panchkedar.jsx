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
import "./Panchkedar1.jpg";
function PanchKedar() {
  return (
    <div className="container">
      <h1 className="main-heading">Panch Kedar Yatra - 10 Nights / 11 Days</h1>
      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About Panch Kedar</h2>
        <p className="section-text">
          Panch Kedar refers to five sacred temples dedicated to Lord Shiva in Uttarakhand, representing different parts of Shiva's divine form. 
          The temples—Kedarnath, Madhyamaheshwar, Tungnath, Rudranath, and Kalpeshwar—are visited in sequence on a profound spiritual journey through the Himalayas.
        </p>
        <div className="highlight-stats">
          <div className="highlight-stat">
            <Mountain className="highlight-icon" />
            <div><span className="highlight-number">16–18 km</span><span className="highlight-label">Longest Trek Day</span></div>
          </div>
          <div className="highlight-stat">
            <Calendar className="highlight-icon" />
            <div><span className="highlight-number">11</span><span className="highlight-label">Days Pilgrimage</span></div>
          </div>
          <div className="highlight-stat">
            <TreePine className="highlight-icon" />
            <div><span className="highlight-number">5</span><span className="highlight-label">Shiva Temples</span></div>
          </div>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>

        {[
          {
            day: 1,
            title: "Rishikesh → Sitapur",
            subtitle: "Start of the Yatra",
            details: [
              { icon: <Route />, label: "Drive", value: "225 km (8–9 hrs)" },
              { icon: <Home />, label: "Stay", value: "Sitapur" }
            ],
            bullets: [
              "Scenic drive via Devprayag, Rudraprayag",
              "Check-in near Gaurikund",
              "Overnight at Sitapur"
            ]
          },
          {
            day: 2,
            title: "Sitapur → Gaurikund → Kedarnath (Trek)",
            subtitle: "First Temple - Kedarnath",
            details: [
              { icon: <Mountain />, label: "Trek", value: "16 km" },
              { icon: <Home />, label: "Stay", value: "Kedarnath" }
            ],
            bullets: [
              "Darshan at Kedarnath (Hump form of Shiva)",
              "Trek from Gaurikund to Kedarnath"
            ]
          },
          {
            day: 3,
            title: "Kedarnath → Sitapur",
            subtitle: "Return Trek",
            details: [],
            bullets: [
              "Early morning darshan (if pending)",
              "Trek back to Gaurikund and drive to Sitapur"
            ]
          },
          {
            day: 4,
            title: "Sitapur → Ransi → Madhyamaheshwar (Trek)",
            subtitle: "Second Temple - Madhyamaheshwar",
            details: [{ icon: <Mountain />, label: "Trek", value: "16 km" }],
            bullets: [
              "Drive to Ransi Village",
              "Trek to Madhyamaheshwar (Navel form of Shiva)",
              "Stay near temple (camp or guesthouse)"
            ]
          },
          {
            day: 5,
            title: "Madhyamaheshwar → Chopta",
            subtitle: "Drive after Return Trek",
            details: [],
            bullets: [
              "Morning darshan",
              "Trek back to Ransi, then drive to Chopta"
            ]
          },
          {
            day: 6,
            title: "Chopta → Tungnath → Chandrashila (Optional)",
            subtitle: "Third Temple - Tungnath",
            details: [
              { icon: <Mountain />, label: "Trek", value: "4–6 km total" }
            ],
            bullets: [
              "Trek to Tungnath (Arms of Shiva)",
              "Optional hike to Chandrashila Peak"
            ]
          },
          {
            day: 7,
            title: "Chopta → Sagar → Rudranath (Trek)",
            subtitle: "Fourth Temple - Rudranath",
            details: [{ icon: <Mountain />, label: "Trek", value: "12–18 km" }],
            bullets: [
              "Drive to Sagar Village, trek to Rudranath",
              "Overnight stay at Panar Bugyal or Rudranath"
            ]
          },
          {
            day: 8,
            title: "Rudranath → Sagar → Helang",
            subtitle: "Descent & Transfer",
            details: [],
            bullets: [
              "Morning darshan",
              "Trek back to Sagar and drive to Helang"
            ]
          },
          {
            day: 9,
            title: "Helang → Kalpeshwar → Helang",
            subtitle: "Fifth Temple - Kalpeshwar",
            details: [{ icon: <Mountain />, label: "Trek", value: "10–12 km" }],
            bullets: [
              "Trek to Kalpeshwar (Hair form of Shiva)",
              "Return to Helang/Pipalkoti"
            ]
          },
          {
            day: 10,
            title: "Helang → Rishikesh",
            subtitle: "Return Journey",
            details: [{ icon: <Route />, label: "Drive", value: "9–10 hrs" }],
            bullets: ["Scenic return via mountain roads"]
          },
          {
            day: 11,
            title: "Departure from Rishikesh",
            subtitle: "End of Yatra",
            details: [],
            bullets: ["Blessings of Panch Kedar complete", "Optional local visit"]
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
          <li>Accommodation: 10 nights in basic hotels, lodges, or camps</li>
          <li>Meals: Daily vegetarian breakfast, dinner; evening tea/snacks</li>
          <li>Transport: Pick-up & drop from Rishikesh / Haridwar</li>
          <li>Guides: Experienced local guides & trek leaders</li>
        </ul>
      </section>
      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials to Carry</h2>
        <ul className="list">
          <li>Warm jackets, gloves, woolen cap</li>
          <li>Waterproof trekking shoes with grip</li>
          <li>Raincoat/Poncho, 30–40L backpack with cover</li>
          <li>2L Water bottles, torch/headlamp, sunscreen</li>
          <li>ID Proof, first aid kit, trekking pole, dry fruits/snacks</li>
        </ul>
      </section>
      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ Carry cash at all times!</p>
          <p>ATMs are scarce in the mountains. Plan accordingly to avoid inconvenience during the yatra.</p>
        </div>
      </section>
      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">
            Price: <span className="price-highlight">₹35,000/-</span> (Rishikesh to Rishikesh)
          </h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default PanchKedar;