import React, { useState } from "react";
import { database } from "../firebaseConfig"; // Ensure correct Firebase import
import { ref, push } from "firebase/database";
import Navbar from "../components/Navbar"; // Navbar
import Select from "react-select"; // New import for custom dropdown
import "./Schedule.css"; // Import CSS for styling

const paymentOptions = [
  { value: "insurance", label: "Insurance" },
  { value: "self-pay", label: "Self-Pay" },
  { value: "HSA", label: "HSA/FSA" },
  { value: "cash", label: "Cash Payment" },
];

const Schedule = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [paymentType, setPaymentType] = useState(null);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const appointmentData = {
      name,
      email,
      phone,
      message,
      preferredTime,
      paymentType: paymentType ? paymentType.value : "",
    };

    push(ref(database, "appointments"), appointmentData)
      .then(() => {
        alert("Appointment request sent successfully!");
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setPreferredTime("");
        setPaymentType(null);
      })
      .catch((error) => {
        console.error("Error saving appointment:", error);
      });
  };

  return (
    <>
      <Navbar />
      <div className="schedule-container">
        <form className="schedule-form" onSubmit={handleSubmit}>
          <h2>Schedule an Appointment</h2>

          {/* Name */}
          <input 
            type="text" 
            placeholder="Full Name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />

          {/* Email */}
          <input 
            type="email" 
            placeholder="Email Address" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />

          {/* Phone */}
          <input 
            type="tel" 
            placeholder="Phone Number" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required 
          />

          {/* Message */}
          <textarea 
            placeholder="Your Message" 
            value={message} 
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          {/* Preferred Date & Time */}
          <input 
            type="datetime-local" 
            value={preferredTime} 
            onChange={(e) => setPreferredTime(e.target.value)} 
          />

          {/* Smooth Payment Type Dropdown */}
          <Select 
            options={paymentOptions} 
            value={paymentType} 
            onChange={setPaymentType} 
            placeholder="Select an Insurance Type / Payment"
            className="custom-select"
          />

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Schedule;