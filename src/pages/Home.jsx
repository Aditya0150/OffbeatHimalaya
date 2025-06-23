import React, { useEffect } from "react";
import "../styles/Home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Tours from "./Tour";
import Contact from "./Contact";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="home">
      <div className="hero-section">
        <video
          className="hero-video"
          src="/assets/DSC_4495.MOV" 
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="hero-overlay" />

        <div className="hero-content">
          <h1 data-aos="fade-up" className="hero-title">
            Explore the Himalayas
          </h1>
          <p data-aos="fade-up" data-aos-delay="200" className="hero-text">
            Discover the True Heart of the Himalayas with Us.
          </p>
          <a
            href="#tours-section"
            className="hero-btn"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Discover Your Adventure
          </a>
        </div>
      </div>

      <section id="tours-section" className="common-background">
        <Tours />
      </section>

      <section id="contact-section" className="common-background">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
