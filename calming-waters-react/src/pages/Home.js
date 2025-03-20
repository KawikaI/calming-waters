import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import Navbar from "../components/Navbar"; // Import Navbar
import OfficeGallery from "../components/OfficeGallery"; // Import OfficeGallery
import "../components/OfficeGallery.css"; // Import styles
import Footer from "../components/Footer"; // Ensure correct path
import PricingInfo from "../components/PricingInfo";
import "./Specialties.css";
import "./PricingInfo.css";







const Home = () => {
  const specialties = [
    , "⭐Trauma and PTSD⭐", "⭐Depression⭐", "⭐Anxiety⭐","Obsessive-Compulsive (OCD)",
    "Anger Management", "Borderline Personality (BPD)", "Coping Skills", "Divorce", "Domestic Abuse", 
"Domestic Violence", "Emotional Disturbance", "Family Conflict", "Grief",
"Life Transitions", "Parenting", 
"Relationship Issues", "Self Esteem", "Self-Harming", "Sexual Abuse", "Stress", 
"Suicidal Ideation", "Transgender", "Veterans"
  ];

  return (
    <div>
      {/* 🔹 Replacing the manual navbar with the imported Navbar component */}
      <Navbar />

      <header className="text-white text-center py-5 App-header">
        <h1 className="header-title">Calming Waters Counseling</h1>
        <p className="header-subtitle">Let this be your guide to calm waters and inner peace</p>
      </header>

      <section className="profile-section container mt-5">
        <div className="profile-pic">
          <img 
            src="/calming-waters-pics/profile.webp" 
            alt="Therapist Profile"
            width="250"
            height="250"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        <div className="logo-container">
          <img 
            src="/calming-waters-pics/ncc.webp" 
            alt="NCC Logo"
            loading="eager"
          />
        </div>

        <div className="skills-box">
          
          <p>
          National Certified Counselor (NCC) is the premier counseling certification. Earning national certification demonstrates to your colleagues and the public that you have voluntarily met high national standards for the practice of counseling.
          </p>
        </div>

        <div className="welcome-box">
          <h3>Welcome</h3>
          <p>
            Life can throw us some difficult challenges and so many struggle with navigating through those challenges. It can sometimes feel like there is no light at the end of the tunnel and it is during these times, we all could use extra support. It also takes courage to reach out for help. I believe that everyone has the strength to get through life's toughest challenges with the right tools and support. That is why I am here to provide a safe, supportive environment, listen to you, and work with you to help find solutions and help you get back to living life.
          </p>
        </div>
      </section>


{/* 🔹 Add Office Gallery Here */}
<div className="container mt-5">
        <h2 className="text-center">Come in!</h2>
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