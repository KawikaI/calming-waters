import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "../components/Navbar"; // Import Navbar
import OfficeGallery from "../components/OfficeGallery"; // Import OfficeGallery
import "../components/OfficeGallery.css"; // Import styles
import Footer from "../components/Footer"; // Ensure correct path
import PricingInfo from "../components/PricingInfo";







const Home = () => {
  const specialties = [
    "Anger Management", "Borderline Personality (BPD)", "Coping Skills", "Divorce", "Domestic Abuse", 
"Domestic Violence", "Dual Diagnosis", "Emotional Disturbance", "Family Conflict", "Grief",
"Life Transitions", "Obsessive-Compulsive (OCD)", "Parenting", "Peer Relationships", 
"Relationship Issues", "Self Esteem", "Self-Harming", "Sexual Abuse", "Stress", 
"Suicidal Ideation", "Transgender", "Veterans"
  ];

  return (
    <div>
      {/* 🔹 Replacing the manual navbar with the imported Navbar component */}
      <Navbar />

      <header className="bg-primary text-white text-center py-5">
        <h1>Welcome to calm waters and smooth sailing</h1>
        <p>Let the tide of life carry you, but never let it pull you under.</p>
      </header>

      <section className="profile-section container mt-5 d-flex align-items-center justify-content-center">
    {/* Profile Picture Placeholder */}
    <div className="profile-pic">
    <img src="/calming-waters-pics/place.jpeg" alt="Therapist Profile" />
    </div>

    {/* Skills Box */}
    <div className="skills-box">
        <h3>Welcome</h3>
        <p>
        Life can throw us some difficult challenges and so many struggle with navigating through those challenges. It can sometimes feel like there is no light at the end of the tunnel and it is during these times, we all could use extra support. It also takes courage to reach out for help. I believe that everyone has the strength to get through life's toughest challenges with the right tools and support. That is why I am here to provide a safe, supportive environment, listen to you, and work with you to help find solutions and help you get back to living life.
        </p>
    </div>
</section>


{/* 🔹 Add Office Gallery Here */}
<div className="container mt-5">
        <h2 className="text-center">Our Office Space</h2>
        <OfficeGallery />
      </div>

      <PricingInfo />



     

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
      {/* 🔹 Footer at the Bottom */}
      <Footer />
    </div>
  );
};

export default Home;