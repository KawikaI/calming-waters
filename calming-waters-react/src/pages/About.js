import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./About.css"; // Keep existing styles

const therapyApproaches = [
  { name: "Cognitive Behavioral Therapy (CBT)", info: "Cognitive-behavioral therapy stresses the role of thinking in how we feel and what we do. It is based on the belief that thoughts, rather than people or events, cause our negative feelings. The therapist assists the client in identifying, testing the reality of, and correcting dysfunctional beliefs underlying his or her thinking. The therapist then helps the client modify those thoughts and the behaviors that flow from them. CBT is a structured collaboration between therapist and client and often calls for homework assignments. CBT has been clinically proven to help clients in a relatively short amount of time with a wide range of disorders, including depression and anxiety." },
  { name: "Art Therapy", info: "It may look like a craft class, but art therapy is a serious technique that uses the creative process to help improve the mental health of clients. Art therapy can be used on children and adults to treat a wide range of emotional issues, including anxiety, depression, family and relationship problems, abuse and domestic violence, and trauma and loss. Commonly found in hospitals and community centers, art therapy programs are based on the belief that the creative process is healing and life-enhancing. As they paint or draw, a skilled therapist can use the client's works of art and their approach to the process as springboards to help them gain personal insight, improve their judgment, cope with stress, and work through traumatic experiences." },
  { name: "Culturally Sensitive", info: "Culturally sensitive therapists provide therapy that is culturally sensitive. They understand that people from different backgrounds have different values, practices, and beliefs, and are sensitive to those differences when working with individuals and families in therapy." },
  { name: "Dialectical Behavior (DBT)", info: "Dialectical Behavior Therapy (DBT) is the treatment most closely associated with Borderline Personality Disorder (BPD). Therapists practice DBT in both individual and group sessions. The therapy combines elements of CBT to help with regulating emotion through distress tolerance and mindfulness. The goal of Dialectical Behavior Therapy is to alleviate the intense emotional pain associated with BPD." },
  { name: "Mindfulness-Based (MBCT)", info: "For clients with chronic pain, hypertension, heart disease, cancer, and other health issues such as anxiety and depression, mindfulness-based cognitive therapy, or MBCT, is a two-part therapy that aims to reduce stress, manage pain, and embrace the freedom to respond to situations by choice. MCBT blends two disciplines--cognitive therapy and mindfulness. Mindfulness helps by reflecting on moments and thoughts without passing judgment. MBCT clients pay close attention to their feelings to reach an objective mindset, thus viewing and combating life's unpleasant occurrences." },
  { name: "Multicultural", info: "Multicultural awareness is an understanding and sensitivity of the values, experiences, and lifestyles of minority groups. Differences in race, culture, religion, gender, sexual orientation, socioeconomic status, are all tackled by Multicultural counseling. In the counseling setting, the counselor recognizes that the client is different from the counselor and treats the client without forcing the client to be like him or her." },
  { name: "Person-Centered", info: "Person-centered therapy uses a non-authoritative approach that allows clients to take more of a lead in discussions so that, in the process, they will discover their own solutions. The therapist acts as a compassionate facilitator, listening without judgment and acknowledging the client's experience without moving the conversation in another direction. The therapist is there to encourage and support the client and to guide the therapeutic process without interrupting or interfering with the client's process of self-discovery." },
  { name: "Solution Focused Brief (SFBT)", info: "Solution-focused therapy, sometimes called 'brief therapy,' focuses on what clients would like to achieve through therapy rather than on their troubles or mental health issues. The therapist will help the client envision a desirable future, and then map out the small and large changes necessary for the client to undergo to realize their vision. The therapist will seize on any successes the client experiences, to encourage them to build on their strengths rather than dwell on their problems or limitations." },
  { name: "Strength-Based", info: "Strength-based therapy is a type of positive psychotherapy and counseling that focuses more on your internal strengths and resourcefulness, and less on weaknesses, failures, and shortcomings. This focus sets up a positive mindset that helps you build on you best qualities, find your strengths, improve resilience and change worldview to one that is more positive. A positive attitude, in turn, can help your expectations of yourself and others become more reasonable." },
  { name: "Trauma Focused", info: "Trauma focused cognitive behavioral therapy (TF-CBT) helps people who may be experiencing post-traumatic stress after a traumatic event to return to a healthy state." },
   
];

const About = () => {
  const [selectedApproach, setSelectedApproach] = useState(null);

  return (
    <>
      <Navbar />

      <div className="about-container">
        {/* Profile Box */}
        <div className="about-box">
          <img src="/calming-waters-pics/profile.jpg" alt="Therapist" className="profile-pic" />
        </div>

        {/* About Box */}
        <div className="second-box">
          <h2>About</h2>
          <p>
            I enjoy working with adolescents, adults, and families on the reservation.
            I have experience with trauma, self-harm, anxiety, and grief.
          </p>
        </div>

        {/* Credentials Box */}
        <div className="fourth-box">
          <h2>Credentials</h2>
          <p>Here are my credentials.</p>
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