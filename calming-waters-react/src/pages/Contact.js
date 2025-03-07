import React from "react";
import Navbar from "../components/Navbar"; // Ensure correct path

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="container mt-5">
        <h2>Contact Me</h2>
        <p>Email: calmingwaters@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </div>
    </div>
  );
};

export default Contact;