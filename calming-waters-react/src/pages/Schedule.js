import React, { useState } from "react";
import { database } from "../firebaseConfig"; // Adjusted to match your file location
import { ref, push } from "firebase/database";
import Navbar from "../components/Navbar"; // Ensure Navbar is correctly imported

const Schedule = () => {
  // 🔹 State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [paymentType, setPaymentType] = useState("");

  // 🔹 Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    const appointmentData = {
      name,
      email,
      phone,
      message,
      preferredTime,
      paymentType
    };

    // 🔹 Push data to Firebase Realtime Database
    push(ref(database, "appointments"), appointmentData)
      .then(() => {
        alert("Appointment request sent successfully!");
        
        // Reset form fields
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        setPreferredTime("");
        setPaymentType("");
      })
      .catch((error) => {
        console.error("Error saving appointment:", error);
      });
  };

  return (
    <>
    <Navbar />
    <div className="container mt-5">
    
      <h2 className="text-center">Schedule an Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <label>Name</label>
        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />

        {/* Email */}
        <label>Email</label>
        <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />

        {/* Phone */}
        <label>Phone</label>
        <input type="tel" className="form-control" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        {/* Message */}
        <label>Message</label>
        <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)}></textarea>

        {/* Preferred Date & Time */}
        <label>Preferred Date & Time</label>
        <input type="datetime-local" className="form-control" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} />

        {/* Payment Type */}
        <label>Insurance Type / Payment</label>
        <select className="form-control" value={paymentType} onChange={(e) => setPaymentType(e.target.value)}>
          <option value="">Select an option</option>
          <option value="insurance">Insurance</option>
          <option value="self-pay">Self-Pay</option>
        </select>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
    </>
  );
};

export default Schedule;