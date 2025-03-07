import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "../components/Navbar"; // Import Navbar

const Home = () => {
  const specialties = [
    "Anxiety", "Depression", "Trauma", "Mindfulness", "Self-Esteem", "Grief",
    "Relationships", "Stress", "Burnout", "Loneliness", "Career Counseling",
    "Compassion Fatigue", "Child or Adolescent", "Social Anxiety", "Body Image Disorders",
    "Couples Counseling", "College Mental Health"
  ];

  return (
    <div>
      {/* 🔹 Replacing the manual navbar with the imported Navbar component */}
      <Navbar />

      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to calm waters and smooth sailing</h1>
        <p>inpirational qutoe</p>
      </header>

      <section className="profile-section container mt-5 d-flex align-items-center justify-content-center">
    {/* Profile Picture Placeholder */}
    <div className="profile-pic">
        <img src="https://via.placeholder.com/200x250" alt="Therapist Profile" />
    </div>

    {/* Skills Box */}
    <div className="skills-box">
        <h3>Skills & Expertise</h3>
        <ul>
            <li>Individual Therapy</li>
            <li>Couples Counseling</li>
            <li>Mindfulness Training</li>
            <li>CBT & DBT Techniques</li>
            <li>Trauma Recovery</li>
        </ul>
    </div>
</section>

      <section id="services" className="container mt-5">
        <h2 className="text-center">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <h3>Individual Therapy</h3>
            <p>Personalized one-on-one sessions.</p>
          </div>
          <div className="col-md-4">
            <h3>Couples Counseling</h3>
            <p>Helping relationships grow stronger.</p>
          </div>
          <div className="col-md-4">
            <h3>Mindfulness Coaching</h3>
            <p>Learn techniques to manage stress.</p>
          </div>
        </div>
      </section>

     

      {/* 🔹 Specialties Section */}
      <div className="container mt-5">
        <div className="specialties-box p-5 rounded-4 shadow-lg text-center">
          <h2 className="mb-4">Specialties</h2>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {specialties.map((item, index) => (
              <span key={index} className="specialty-badge">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;