import React from "react";

import Navbar from "@/components/Navbar";

export default function AboutUs() {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">

      {/* Who We Are Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="mb-4">
            At <strong>Off Beat Himalaya</strong>, we take you beyond the usual tourist trails into the heart of the Himalayas. Our goal is to offer authentic trekking experiences that connect you with nature, local culture, and breathtaking landscapes. Whether you're a seasoned trekker or an adventure enthusiast, we ensure a journey filled with unforgettable moments.
          </p>
          <p>
            With a focus on eco-friendly travel, sustainable tourism, and local empowerment, we ensure every trek supports the environment and the mountain communities we explore. Whether it’s the snowy trails of Kedarkantha, the divine routes of Kuari Pass, or the vibrant meadows of Valley of Flowers, we bring you closer to the real essence of the Himalayas — raw, pure, and offbeat.
          </p>
        </div>
        <div>
          <img
            src="/Aboutus5.jpg"
            alt="Off Beat Himalaya Team"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Building Connections Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <img
            src="/Aboutus4.jpg"
            alt="Building Connections"
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-3xl font-bold mb-4">Building Connections</h2>
          <p>
            We believe the best journeys are shared ones. Our small group sizes ensure personalized attention, while our collaborative approach fosters lasting friendships. Many of our trekkers return not just for the mountains, but for the community we've built.
          </p>
          <p>
            From first-time hikers to seasoned mountaineers, everyone finds their place in the Offbeat Himalaya family.
          </p>
        </div>
      </section>

      {/* Successful Trips Section */}
      <section className="py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Successful Trips</h2>
        <p className="text-center mb-12 text-lg text-gray-600">Celebrating the memories from our successful adventures in the Himalayas</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Aboutus 1.jpg"
              alt="Team celebrating successful trip at temple"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Temple Celebration</h3>
              <p className="text-sm text-gray-600">Team gathering at a historic temple after a rewarding trek.</p>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Aboutus2.jpg"
              alt="Team group photo during successful expedition"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Group Expedition Success</h3>
              <p className="text-sm text-gray-600">Our team united after conquering challenging terrains.</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img
              src="/Aboutus3.jpg"
              alt="Successful team adventure"
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold mb-2">Team Adventure Success</h3>
              <p className="text-sm text-gray-600">Celebrating another successful Himalayan journey with the team.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-lg p-12 shadow-lg">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Mission & Values</h2>
        <p className="text-lg mb-8 text-center">Guiding responsible adventures that honor mountain communities, prioritize safety, and uplift</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-500 bg-opacity-30 rounded-lg p-6 text-center">
            <svg className="mx-auto mb-4 h-12 w-12 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            <h3 className="font-semibold text-xl mb-2">Sustainability First</h3>
            <p>
              Every trek follows Leave No Trace principles. We partner with local communities, minimize our environmental footprint, and actively participate in mountain conservation efforts.
            </p>
          </div>
          <div className="bg-blue-500 bg-opacity-30 rounded-lg p-6 text-center">
            <svg className="mx-auto mb-4 h-12 w-12 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            <h3 className="font-semibold text-xl mb-2">Safety Always</h3>
            <p>
              Your safety is non-negotiable. Our guides are certified in wilderness first aid, we maintain strict safety protocols, and all expeditions are equipped with emergency communication systems.
            </p>
          </div>
          <div className="bg-blue-500 bg-opacity-30 rounded-lg p-6 text-center">
            <svg className="mx-auto mb-4 h-12 w-12 text-orange-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584a6.062 6.062 0 00-.94-.486l-.001-.031c-.013-.219-.037-.44-.037-.666V18.72M15 6a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <h3 className="font-semibold text-xl mb-2">Community & Culture</h3>
            <p>
              We believe in responsible tourism that benefits local communities. Our treks employ local guides, support village homestays, and celebrate the rich cultural heritage of the Himalayas.
            </p>
          </div>
        </div>
      </section>

      {/* Our Treks & Adventures Section */}
      <section className="bg-yellow-50 rounded-lg p-12 shadow-inner">
        <h2 className="text-3xl font-bold mb-8">Our Treks & Adventures</h2>
        <p>
          From the snowy heights of Kedarkantha and the vibrant Valley of Flowers, to the winter wonderland of Auli-Niti and the pristine paths of Kuari Pass, Har Ki Dun, and Roopkund, Off Beat Himalaya curates remarkable experiences amid the Himalayan mountains.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Kedarkantha",
            "Valley of Flowers",
            "Auli and Niti Winter Expedition",
            "Kuari Pass",
            "Har Ki Dun",
            "Roopkund",
          ].map((trek) => (
            <span
              key={trek}
              className="bg-blue-200 text-blue-800 rounded-full px-4 py-2 text-sm font-semibold"
            >
              {trek}
            </span>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-white rounded-lg p-12 shadow-lg text-center">
        <blockquote className="italic text-lg text-gray-700">
          "Every mountain has a story. Every trekker becomes part of ours."
        </blockquote>
        <cite className="block mt-4 font-semibold text-indigo-700">— The Offbeat Himalaya Team</cite>
      </section>

        {/* Hero Section - Moved to Bottom */}
        <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-lg p-12 text-center text-white shadow-lg">
          <h1 className="text-4xl font-extrabold mb-4">Ready for Your Next Adventure?</h1>
          <p className="text-lg mb-8">Join us for an unforgettable journey through the majestic Himalayas</p>
          <a
            href="https://wa.me/918126417109?text=Hi%20there!%20I'm%20passionate%20about%20trekking%20and%20would%20love%20to%20explore%20adventures%20with%20you"
            className="inline-block bg-white text-indigo-700 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us Now
          </a>
        </section>

    </div>
  </>
  );
}
