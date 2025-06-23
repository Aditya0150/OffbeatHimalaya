import React from 'react';
import { Link } from "react-router-dom";
import {
  Mountain, MapPin, Clock, Users, TreePine,
  Sun, Calendar, Route, Home, AlertTriangle
} from 'lucide-react';
import '../styles/Valleyofflower.css';
import RoopkundImg from '../Itinerary/Roopkund1.jpg';

function Roopkund() {
  return (
    <div className="container">
      <h1 className="main-heading">Roopkund Trek – 7 Nights / 8 Days</h1>
      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About Roopkund</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              Roopkund, the mysterious glacial lake, lies in the lap of Trishul massif at 16,000 ft. Known for hundreds of ancient skeletons, it's surrounded by snow-clad peaks and alpine meadows.
            </p>
            <div className="highlight-stats">
              <div className="highlight-stat"><Mountain className="highlight-icon" /><div><span className="highlight-number">16,000</span><span className="highlight-label">ft Altitude</span></div></div>
              <div className="highlight-stat"><Calendar className="highlight-icon" /><div><span className="highlight-number">8</span><span className="highlight-label">Days Trek</span></div></div>
              <div className="highlight-stat"><TreePine className="highlight-icon" /><div><span className="highlight-number">100+</span><span className="highlight-label">Skeletons</span></div></div>
            </div>
          </div>
          <div className="about-image"><img src={RoopkundImg} alt="Roopkund Trek" className="nature-image" /></div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>
        {[
          { day: 1, title: "Rishikesh to Lohajung", subtitle: "Scenic Himalayan Drive", details: [{ icon: <Route />, label: "Distance", value: "270 km" }, { icon: <Clock />, label: "Duration", value: "10 hrs" }, { icon: <Home />, label: "Stay", value: "Lohajung" }], bullets: ["Beautiful drive via Devprayag, Karnaprayag", "Stay in Lohajung homestay"] },
          { day: 2, title: "Lohajung to Didna", subtitle: "Trek Begins", details: [{ icon: <Mountain />, label: "Trek", value: "7 km" }, { icon: <Clock />, label: "Duration", value: "5 hrs" }, { icon: <Home />, label: "Stay", value: "Didna village" }], bullets: ["Moderate climb", "Through dense forests and rivers"] },
          { day: 3, title: "Didna to Bedni Bugyal", subtitle: "Meadow Views", details: [{ icon: <Mountain />, label: "Trek", value: "11 km" }, { icon: <TreePine />, label: "Altitude", value: "11,500 ft" }], bullets: ["Alpine meadows, views of Trishul", "Camp overnight"] },
          { day: 4, title: "Bedni to Bhagwabasa", subtitle: "High Altitude Trek", details: [{ icon: <Mountain />, label: "Trek", value: "10 km" }, { icon: <Clock />, label: "Duration", value: "7 hrs" }], bullets: ["Cross Patar Nachauni & Kalu Vinayak", "Camp at Bhagwabasa"] },
          { day: 5, title: "Bhagwabasa to Roopkund & Back", subtitle: "Summit Day", details: [{ icon: <Mountain />, label: "Altitude", value: "16,000 ft" }, { icon: <Clock />, label: "Duration", value: "7-8 hrs" }], bullets: ["Reach Roopkund Lake", "Return to Patar Nachauni"] },
          { day: 6, title: "Return to Lohajung", subtitle: "Long Descent", details: [], bullets: ["Same route descent", "Stay in Lohajung"] },
          { day: 7, title: "Buffer Day", subtitle: "Weather Contingency", details: [], bullets: ["Used in case of delays", "Otherwise explore Lohajung"] },
          { day: 8, title: "Lohajung to Rishikesh", subtitle: "Journey Ends", details: [], bullets: ["Final drive back", "Reach by evening"] }
        ].map(({ day, title, subtitle, details, bullets }) => (
          <div key={day} className="itinerary-card">
            <div className="itinerary-header">
              <div className="day-circle">{day}</div>
              <div className="itinerary-day-info"><h3>{title}</h3><p className="itinerary-subtitle">{subtitle}</p></div>
            </div>
            <div className="info-grid">
              {details.map((d, idx) => (
                <div key={idx} className="info-item">{d.icon}
                  <div className="info-content"><span className="info-label">{d.label}</span><span className="info-value">{d.value}</span></div>
                </div>
              ))}
            </div>
            <ul>{bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
          </div>
        ))}
      </section>

      <section className="section">
        <h2 className="section-title"><Users /> Inclusions</h2>
        <ul className="list">
          <li>7 nights accommodation in tents or lodges</li>
          <li>All meals (veg), snacks, and beverages</li>
          <li>Porters, guides, trek leader</li>
          <li>Transport from Rishikesh to Lohajung and back</li>
        </ul>
      </section>

      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ High Altitude Warning!</p>
          <p>Roopkund trek reaches above 15,000 ft. Acclimatization and fitness are essential.</p>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials To Carry</h2>
        <ul className="list">
          <li>Thermal wear, windproof jacket</li>
          <li>Trekking poles, UV sunglasses</li>
          <li>Headlamp, ID Proof, dry snacks</li>
        </ul>
      </section>

      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">Price: <span className="price-highlight">₹13,999/-</span> (Rishikesh to Rishikesh)</h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Roopkund;