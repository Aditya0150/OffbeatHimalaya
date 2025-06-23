import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import Tours from "./pages/Tour";
import Contact from "./pages/Contact";

import About from "./pages/About";
import ValleyOfFlowers from "../src/Itinerary/Valleyofflower";
import Roopkund from "./Itinerary/Roopkund";
import DronagiriBaseCamp from "./Itinerary/DronagiriBaseCamp";
import HarKiDun from "./Itinerary/HarKiDun";
import Kagbhusandi from "./Itinerary/Kagbhusandi";
import Kedarkantha from "./Itinerary/Kedarkantha";
import KuariPass from "./Itinerary/KuariPass";
import Satopanth from "./Itinerary/Satopanth";
import "./styles/App.css";
import PanchKedar from "./Itinerary/Panchkedar";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/valley-of-flowers" element={<ValleyOfFlowers />} />
        <Route path="/Roopkund" element={<Roopkund />} />
        <Route path="/dronagiri-base-camp" element={<DronagiriBaseCamp />} />
        <Route path="/har-ki-dun" element={<HarKiDun />} />
        <Route path="/Kagbhusandi" element={<Kagbhusandi />} />
        <Route path="/Kuari-Pass" element={<KuariPass />} />
        <Route path="/Satopanth" element={<Satopanth />} />
        <Route path="/Kedarkantha" element={<Kedarkantha />} />
        <Route path="/Panchkedar" element={<PanchKedar />} />
      </Routes>
    </Router>
  );
};

export default App;