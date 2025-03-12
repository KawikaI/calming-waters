import React from "react";
import Navbar from "../components/Navbar"; // Ensure correct path
import "../components/OfficeGallery.css";



const About = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>About Me</h2>
        <p>I'm a licensed therapist with over 10 years of experience, helping individuals find emotional clarity and peace.</p>
      </div>
    </div>
  );
};

export default About;