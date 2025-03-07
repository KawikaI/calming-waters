import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const location = useLocation(); // Get current page

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/About" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid"> {/* Change this from "container" to "container-fluid" */}
    <a className="navbar-brand" href="#">Calming Waters</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/services">Expertise</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/schedule">Schedule</Link></li>
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Navbar;