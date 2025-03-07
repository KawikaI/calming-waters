import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="hero">
      <h1>Find Peace & Balance</h1>
      <p>Professional therapy services to support your mental well-being.</p>
      <Link to="/contact" className="btn">Book an Appointment</Link>
    </div>
  );
};

export default Home;