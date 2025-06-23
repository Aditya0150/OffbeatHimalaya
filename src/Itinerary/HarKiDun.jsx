import React from 'react';
import { Link } from 'react-router-dom';
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
import HarKiDunImg from '../Itinerary/HarKiDun1.jpg';

function HarKiDun() {
  return (
    <div className="container">
      <h1 className="main-heading">Har Ki Dun Trek - 6 Nights / 7 Days</h1>

      <section className="section about-section">
        <h2 className="section-title"><TreePine /> About the Har Ki Dun Trek</h2>
        <div className="about-content">
          <div className="about-text">
            <p className="section-text">
              Har Ki Dun, also known as the “Valley of Gods,” is nestled in the Western Himalayas of Uttarakhand. 
              This trek offers scenic views of ancient villages, alpine meadows, glacier basins, and panoramic peaks like Swargarohini.
              Ideal for beginners and nature lovers, this all-season trail brings you close to Garhwal’s raw beauty.
            </p>
            <div className="highlight-stats">
              <div className="highlight-stat">
                <Mountain className="highlight-icon" />
                <div><span className="highlight-number">12,000</span><span className="highlight-label">ft Altitude</span></div>
              </div>
              <div className="highlight-stat">
                <Calendar className="highlight-icon" />
                <div><span className="highlight-number">7</span><span className="highlight-label">Days Trek</span></div>
              </div>
              <div className="highlight-stat">
                <TreePine className="highlight-icon" />
                <div><span className="highlight-number">47</span><span className="highlight-label">km Trail</span></div>
              </div>
            </div>
          </div>
          <div className="about-image">
            <img src={HarKiDunImg} alt="Har Ki Dun Valley" className="nature-image" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="section-title"><MapPin /> Detailed Itinerary</h2>

        {[
          {
            day: 1,
            title: "Dehradun to Sankri",
            subtitle: "The Drive to the Base Camp",
            details: [
              { icon: <Route />, label: "Distance", value: "210 km" },
              { icon: <Clock />, label: "Duration", value: "9–10 hours" },
              { icon: <Home />, label: "Stay", value: "Guesthouse in Sankri" }
            ],
            bullets: [
              "Scenic drive through Mussoorie and Yamuna Valley",
              "Evening briefing and rest at Sankri (6,400 ft)"
            ]
          },
          {
            day: 2,
            title: "Sankri to Taluka (Drive), then trek to Seema",
            subtitle: "The Trek Begins",
            details: [
              { icon: <Route />, label: "Drive", value: "12 km" },
              { icon: <Mountain />, label: "Trek", value: "10 km (~5-6 hrs)" },
              { icon: <Home />, label: "Stay", value: "Campsite at Seema" }
            ],
            bullets: [
              "Drive to Taluka and start trek through dense forests",
              "Cross streams and wooden bridges en route"
            ]
          },
          {
            day: 3,
            title: "Seema to Har Ki Dun",
            subtitle: "The Iconic Valley",
            details: [
              { icon: <Mountain />, label: "Trek", value: "11 km (~6 hrs)" },
              { icon: <TreePine />, label: "Altitude", value: "11,700 ft" },
              { icon: <Home />, label: "Stay", value: "Campsite at Har Ki Dun" }
            ],
            bullets: [
              "Gradual climb with views of Swargarohini & Jaundhar glacier",
              "Camp beside the river with a view of the valley"
            ]
          },
          {
            day: 4,
            title: "Har Ki Dun Exploration Day",
            subtitle: "Rest, Explore, Enjoy",
            details: [
              { icon: <Clock />, label: "Activities", value: "Exploration & Acclimatization" },
              { icon: <MapPin />, label: "Nearby", value: "Maninda Tal, Jaundhar Glacier" }
            ],
            bullets: [
              "Optional hike to Maninda Tal or just enjoy meadow walks",
              "Photography, story sharing around bonfire"
            ]
          },
          {
            day: 5,
            title: "Har Ki Dun to Seema",
            subtitle: "Return Journey Begins",
            details: [
              { icon: <Mountain />, label: "Trek", value: "11 km (~5 hrs)" },
              { icon: <Home />, label: "Stay", value: "Campsite at Seema" }
            ],
            bullets: [
              "Retrace steps along the valley",
              "Spotting birds and wildlife"
            ]
          },
          {
            day: 6,
            title: "Seema to Taluka (Trek) → Sankri (Drive)",
            subtitle: "Back to Base",
            details: [
              { icon: <Mountain />, label: "Trek", value: "10 km" },
              { icon: <Route />, label: "Drive", value: "12 km" }
            ],
            bullets: [
              "Return trek to Taluka",
              "Drive back to Sankri for overnight stay"
            ]
          },
          {
            day: 7,
            title: "Sankri to Dehradun",
            subtitle: "Departure Day",
            details: [],
            bullets: [
              "Early morning drive back to Dehradun",
              "End of a memorable Himalayan adventure"
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
          <li>Accommodation: 6 Nights (Camp & Guesthouse)</li>
          <li>Meals: All veg meals from Sankri</li>
          <li>Transport: Dehradun – Sankri – Dehradun</li>
          <li>Guide & Support: Certified trek leaders, local staff</li>
          <li>Permits: All required forest permissions included</li>
        </ul>
      </section>
      <section className="section important-note">
        <h2 className="section-title"><AlertTriangle /> Important Note</h2>
        <div className="notice-box">
          <p className="notice-heading">⚠️ Carry cash at all times!</p>
          <p>ATMs are limited in remote villages like Sankri. Keep enough cash for emergency use.</p>
        </div>
      </section>
      <section className="section">
        <h2 className="section-title"><TreePine /> Essentials To Carry</h2>
        <ul className="list">
          <li>Down jacket, thermal innerwear</li>
          <li>Trekking shoes (ankle high, good grip)</li>
          <li>Backpack (40L), rain cover, poncho</li>
          <li>Headlamp, water bottles, basic first-aid</li>
          <li>Photo ID, power bank, snacks</li>
        </ul>
      </section>
      <div className="price-section">
        <div className="price-container">
          <h2 className="price-title">
            Price: <span className="price-highlight">₹12,499/-</span> (Dehradun to Dehradun)
          </h2>
          <Link to="/Contact" className="book-button">Book Now</Link>
        </div>
      </div>
    </div>
  );
}

export default HarKiDun;