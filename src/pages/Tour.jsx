import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Tour.css";

const tours = [
<<<<<<< HEAD
  { name: "Valley of Flowers", route: "valley-of-flowers", altitude: "3,658 m", image: "Valley of Flower.png", description: "Embark on a mesmerizing journey through the Valley of Flowers, where vibrant alpine blooms create a breathtaking natural tapestry set against towering Himalayan peaks. This UNESCO World Heritage site offers an unforgettable experience of nature’s finest artistry." },
  { name: "Panch Kedar", route: "Panchkedar", altitude: "3,680 m", image: "Panchkedar1.jpg", description: "A spiritual journey covering five sacred Shiva temples in Uttarakhand: Kedarnath, Tungnath, Rudranath, Madhyamaheshwar, and Kalpeshwar — each steeped in myth and beauty." },
  { name: "Dronagiri Base Camp Trek", route: "dronagiri-base-camp", altitude: "4,200 m", image: "Dronagiri.JPG", description: "A remote and scenic trek leading to the majestic base of Dronagiri peak, surrounded by towering cliffs and alpine meadows. This offbeat trail blends raw Himalayan beauty with ancient legends of devotion and strength, offering a truly immersive adventure." },
  { name: "Satopanth", route: "satopanth", altitude: "4,600 m", image: "Satopanth.jpeg", description: "Venture on a high-altitude pilgrimage to Satopanth Lake, a serene glacial expanse revered in Hindu mythology. Surrounded by towering snow-clad peaks near Badrinath, this sacred destination offers spiritual solace and awe-inspiring Himalayan vistas." },
  { name: "Kagbhusandi", route: "Kagbhusandi", altitude: "4,600 m", image: "Kagbhusandi.jpg", description: "Embark on a less-traveled mystical trek that leads you through secluded trails dotted with crystal-clear alpine lakes, serene meadows, and dense forests. Along the way, you’ll encounter a rich variety of Himalayan birdlife, making it a haven for nature lovers and birdwatchers seeking tranquility far from the crowds." },
  { name: "Har Ki Dun", route: "har-ki-dun", altitude: "3,566 m", image: "Har Ki Dun.png", description: "Discover the enchanting Valley of Gods, where lush meadows, dense forests, and ancient villages unfold against the backdrop of the majestic Swargarohini peaks. This timeless trail blends natural beauty with rich folklore and cultural heritage." },
  { name: "Kuari Pass", route: "kuari-pass", altitude: "4,265 m", image: "Kuari Pass.png", description: "Experience the famed Kuari Pass trek, a relatively short yet rewarding trail that opens up sweeping panoramic views of India’s most iconic peaks, including Nanda Devi and Dronagiri. Ideal for those seeking a blend of adventure and breathtaking scenery." },
  { name: "Kedarkantha", route: "kedarkantha", altitude: "3,800 m", image: "Kedarkantha.jpg", description: "Embark on the Kedarkantha winter trek, a perfect introduction to Himalayan trekking. With its gentle trails, snow-covered forests, and a summit offering 360-degree views of the mighty ranges, this adventure is tailored for first-time trekkers and seasoned explorers alike." },
  { name: "Roopkund", route: "roopkund", altitude: "3,892 m", image: "Roopkund.jpg", description: "A high-altitude Himalayan trek that takes you to Roopkund, a glacial lake shrouded in mystery and legends. Famous for its ancient human skeletons, this trail offers breathtaking views of snow-capped peaks and alpine meadows." }
=======
   { name: "Dronagiri Base Camp Trek", altitude: "4,200 m", image: "Dronagiri.JPG", description: "A remote and scenic trek to the base of Dronagiri peak, full of alpine beauty and legends." },
  { name: "Satopanth", altitude: "4,600 m", image: "Satopanth.jpeg", description: "A high-altitude spiritual trek to the sacred Satopanth Lake near Badrinath." },
  { name: "Kagbhusandi", altitude: "4,600 m", image: "Kagbhusandi.jpg", description: "A less-traveled mystical trek offering stunning alpine lakes and birdwatching opportunities." },
  { name: "Kedarnath", altitude: "3,583 m", image: "Kedarnath-Yatra.jpg", description: "A beautiful trek through the Himalayan ranges." },
  { name: "Valley of Flowers", altitude: "3,658 m", image: "Valley of Flower.png", description: "A trek amidst a valley full of blooming flowers." },
  { name: "Har Ki Dun", altitude: "3,566 m", image: "Har Ki Dun.png", description: "Explore the scenic Valley of Gods." },
  { name: "Kuari Pass", altitude: "4,265 m", image: "Kuari Pass.png", description: "A short trek with stunning panoramic views." },
  { name: "Kedarkantha", altitude: "3,800 m", image: "Kedarkantha.jpg", description: "A winter trek perfect for beginners." },
  { name: "Roopkund", altitude: "3,892 m", image: "Roopkund.jpg", description: "A high-altitude Himalayan trek famous for its glacial lake and ancient human skeletons.." }
>>>>>>> 1699fb4f773ef7dea1feefcf0b5390526d8a3c9d
];

const Tours = () => {
  const navigate = useNavigate();

  const handleNavigate = (route) => {
    navigate(`/${route}`);
  };

  return (
    <div className="tours">
     
      <video
        className="tours-video"
        src="/assets/DSC_7865.MOV"  
        autoPlay
        loop
        muted
        playsInline
      />

     
      <div className="tours-overlay"></div>

      <h2 className="tours-title">Our Popular Treks</h2>

      <div className="tour-list">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={`/assets/${tour.image}`} alt={tour.name} />
            <div className="tour-info">
              <h3 className="tour-name">{tour.name}</h3>
              <p className="tour-description">{tour.description}</p>
              <p className="tour-altitude"><strong>Altitude:</strong> {tour.altitude}</p>
<<<<<<< HEAD
              <button className="book-now" onClick={() => handleNavigate(tour.route)}>
                Book Now
              </button>
=======
              <button className="book-now" onClick={() => navigate("/contact")}>Book Now</button>
>>>>>>> 1699fb4f773ef7dea1feefcf0b5390526d8a3c9d
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;