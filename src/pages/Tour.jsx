import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Tour.css";

const tours = [
  { name: "Kedarnath", altitude: "3,583 m", image: "Kedarnath-Yatra.jpg", description: "A beautiful trek through the Himalayan ranges." },
  { name: "Valley of Flowers", altitude: "3,658 m", image: "Valley of Flower.png", description: "A trek amidst a valley full of blooming flowers." },
  { name: "Har Ki Dun", altitude: "3,566 m", image: "Har Ki Dun.png", description: "Explore the scenic Valley of Gods." },
  { name: "Kuari Pass", altitude: "4,265 m", image: "Kuari Pass.png", description: "A short trek with stunning panoramic views." },
  { name: "Kedarkantha", altitude: "3,800 m", image: "Kedarkantha.jpg", description: "A winter trek perfect for beginners." },
  { name: "Roopkund", altitude: "3,892 m", image: "Roopkund.jpg", description: "A high-altitude Himalayan trek famous for its glacial lake and ancient human skeletons.." },
  { name: "Dronagiri Base Camp Trek", altitude: "4,200 m", image: "Dronagiri.JPG", description: "A remote and scenic trek to the base of Dronagiri peak, full of alpine beauty and legends." },
  { name: "Satopanth", altitude: "4,600 m", image: "Satopanth.jpeg", description: "A high-altitude spiritual trek to the sacred Satopanth Lake near Badrinath." },
  { name: "Kagbhusandi", altitude: "4,600 m", image: "Kagbhusandi.jpg", description: "A less-traveled mystical trek offering stunning alpine lakes and birdwatching opportunities." }
];

const Tours = () => {
  const navigate = useNavigate();

  return (
    <div className="tours">
      <h2 className="tours-title">Our Popular Treks</h2>
      <div className="tour-list">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={`/assets/${tour.image}`} alt={tour.name} />
            <div className="tour-info">
              <h3>{tour.name}</h3>
              <p className="tour-description">{tour.description}</p>
              <p className="tour-altitude"><strong>Altitude:</strong> {tour.altitude}</p>
              <p className="tour-price"><strong>Price:</strong> {tour.price}</p>
              <button className="book-now" onClick={() => navigate("/contact")}>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
