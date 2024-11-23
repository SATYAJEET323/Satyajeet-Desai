// Navbar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faProjectDiagram, faLink, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";


const Navbar = () => {
  return (
    <nav className="vertical-navbar">
      <a href="#home" className="nav-item">
        <FontAwesomeIcon icon={faHome} />
      </a>
      <a href="#AboutMe" className="nav-item">
        <FontAwesomeIcon icon={faUser} />
      </a>
      <a href="#skills" className="nav-item">
        <FontAwesomeIcon icon={faLaptopCode} />
      </a>
      <a href="#Project" className="nav-item">
        <FontAwesomeIcon icon={faProjectDiagram} />
      </a>
      <a href="#Contact" className="nav-item">
        <FontAwesomeIcon icon={faLink} />
      </a>

    </nav>
  );
};

export default Navbar;
