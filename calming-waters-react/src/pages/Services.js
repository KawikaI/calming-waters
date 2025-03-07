import React from "react";
import Navbar from "../components/Navbar"; 

const Services = () => {
  return (
    <div>
      <Navbar />  {/* ✅ Navbar appears on every page */}
      <div className="container mt-5">
        <h2>Our Services</h2>
        <p>Details about different therapy services offered.</p>
      </div>
    </div>
  );
};

export default Services;