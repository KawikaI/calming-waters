import React from "react";

const Footer = () => {

  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" }
  ]


  return (
    <footer className="footer">
      <p>© 2025 Calming Waters Counseling | All Rights Reserved</p>
    </footer>
  );
};

export default Footer;