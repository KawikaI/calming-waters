import React, { useEffect } from "react";
import Navbar from "../components/Navbar"; // Import Navbar
import Footer from "../components/Footer";
import "../components/OfficeGallery.css";
import "./Schedule.css"; // Import CSS for styling
import "./About.css";

const About = () => {
  return (
    <>
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content container */}
      <div className="about-container">
        
        {/* Hero Section */}
        <div className="hero-section">
          <img src="/calming-waters-pics/profile.jpeg" alt="Therapist" />
          <div className="hero-content">
            <h1>Meet Your Therapist</h1>
            <p>Compassionate and experienced, guiding you to inner peace.</p>
          </div>
        </div>

        {/* Qualifications Section */}
        <div className="section">
          <div className="section-content">
            <h2>Qualifications</h2>
            <p>Licensed therapist with 10+ years of experience, specializing in mental wellness.</p>
          </div>
        </div>

        {/* Therapy Approaches Section */}
        <div className="section">
          <div className="section-content">
            <h2>Therapy Approaches</h2>
            <p>Integrative methods including CBT, mindfulness, and holistic healing.</p>
          </div>
        </div>

        {/* More Info Section */}
        <div className="section">
          <div className="section-content">
            <h2>More About Me</h2>
            <p>Passionate about helping others navigate life's challenges with compassion and expertise.</p>
          </div>
        </div>
      </div>

      {/* Footer at the bottom */}
      <Footer />
    </>
  );
};

export default About;