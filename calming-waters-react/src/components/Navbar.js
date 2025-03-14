import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const location = useLocation(); // Get current page
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Logo & Brand */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <img src="/calming-waters-pics/logo.png" alt="Logo" className="nav-logo" />
          Calming Waters
        </Link>

        {/* Desktop Navigation */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/schedule">Schedule</Link></li>
          </ul>
        </div>

        {/* 🔹 Mobile Dropdown Menu */}
        <div className="dropdown-container">
          <button className="dropdown-toggle" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            ☰ {/* Mobile Menu Icon */}
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="navbar-dropdown">
              <Link className="dropdown-item" to="/about" onClick={() => setIsDropdownOpen(false)}>About</Link>
              <Link className="dropdown-item" to="/schedule" onClick={() => setIsDropdownOpen(false)}>Schedule</Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;