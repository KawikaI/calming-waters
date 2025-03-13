import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css"; // Keep existing styles

const therapyApproaches = [
  { name: "Cognitive Behavioral Therapy (CBT)", info: "Cognitive-behavioral therapy helps clients identify, test, and modify negative thoughts and behaviors." },
  { name: "Art Therapy", info: "A creative process that helps individuals gain insight, cope with stress, and process trauma." },
  { name: "Culturally Sensitive", info: "Culturally sensitive therapy adapts approaches to respect clients' cultural backgrounds and values." },
  { name: "Dialectical Behavior (DBT)", info: "DBT combines CBT with distress tolerance and mindfulness techniques." },
  { name: "Mindfulness-Based (MBCT)", info: "MBCT blends cognitive therapy and mindfulness to help manage stress and anxiety." },
  { name: "Multicultural", info: "Therapy that recognizes the experiences and values of minority groups, adapting to their unique needs." },
  { name: "Person-Centered", info: "A non-authoritative therapy where clients lead discussions to find their own solutions." },
  { name: "Solution Focused Brief (SFBT)", info: "Short-term therapy focused on achieving specific goals rather than past problems." },
  { name: "Strength-Based", info: "A positive approach that focuses on internal strengths and resourcefulness." },
  { name: "Trauma Focused", info: "Therapy designed to help individuals recover from traumatic experiences." },
];

const credentials = [
  "Master of Science in Psychology (MS)",
  "Licensed Clinical Professional Counselor (LCPC)",
  "National Certified Counselor certification (NCC)",
  "Certified Forensic Mental Health Evaluator (CFMHE)",
  "Licensed by State of Montana / BBH-LCPC-LIC-48659",
  
 
];

const About = () => {
  const [selectedApproach, setSelectedApproach] = useState(null);

  return (
    <>
      <Navbar />

      <div className="about-container">
        {/* Profile Box */}
        <div className="about-box">
          <img src="/calming-waters-pics/profile2.jpg" alt="Therapist" className="profile-pic" />
        </div>

        {/* About Box */}
        <div className="second-box">
          <h2>About</h2>
          <p>
            I enjoy working with adolescents, adults, and families on the reservation. I have experience with trauma, self-harm, anxiety, depression, suicidal ideation, and grief and loss. I am an ally and work with the LGBTQIA community.</p>
            <p>

            I enjoy working with people and helping them through their darkest days, while celebrating their accomplishments and times of happiness! Therapy is not a one size fits all and I work toward individualizing my therapeutic approaches to meet the needs of each person.
            </p>
          
        </div>

        {/* Credentials Box */}
        <div className="fourth-box">
          <h2>Credentials</h2>
          
          <ul className="credential-list">
            {credentials.map((credential, index) => (
              <li key={index}>{credential}</li>
            ))}
          </ul>
        </div>

        {/* Therapeutic Approaches */}
        <div className="third-box">
          <h2>Therapeutic Approaches</h2>
          <p>Click to learn more about each approach.</p>
          <div className="therapy-list">
            {therapyApproaches.map((approach, index) => (
              <button
                key={index}
                className="therapy-item"
                onClick={() => setSelectedApproach(approach)}
              >
                {approach.name}
              </button>
            ))}
          </div>

          {/* Pop-up Info Bubble */}
          {selectedApproach && (
            <div className="info-popup">
              <p>{selectedApproach.info}</p>
              <button className="close-btn" onClick={() => setSelectedApproach(null)}>Close</button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;