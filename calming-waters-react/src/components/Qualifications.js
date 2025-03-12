import { useState } from "react";

const Qualifications = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="qualifications-container text-center mt-3">
      {/* Button to toggle the dropdown */}
      <button className="btn btn-outline-primary" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide Qualifications" : "View Qualifications"}
      </button>

      {/* Dropdown that appears when clicked */}
      {isOpen && (
        <div className="qualifications-box p-3 mt-2 rounded-3 shadow-sm">
          <ul className="list-unstyled">
            <li>🎓 PhD in Clinical Psychology</li>
            <li>📜 Licensed Professional Counselor (LPC)</li>
            <li>🏆 Certified Trauma Specialist</li>
            <li>📅 10+ Years Experience</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Qualifications;