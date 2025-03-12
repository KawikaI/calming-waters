import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Contact & Schedule */}
        <div className="footer-info">
          <h4>Contact</h4>
          <p>📞 (406) 225-0746</p>
          <p>✉️ milac.calmingwaters@gmail.com</p>

          {/* Schedule Button Moved Here */}
          <div className="footer-schedule">
            <Link to="/schedule" className="schedule-btn">
              📅 Schedule an Appointment
            </Link>
          </div>
        </div>

        {/* Center Section: Location Info */}
        <div className="footer-location">
          <h4>Location</h4>
          <p>Calming Waters Counseling</p>
          <p>314 1st Street East</p>
          <p>Suite 207</p>
          <p>Polson, MT 59860</p>
        </div>

        {/* Right Section: Logo */}
        <div className="footer-logo">
  <img src="/calming-waters-pics/logo.png" alt="Business Logo" className="business-logo" />
</div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-copyright">
        © 2025 Calming Waters Counseling | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;