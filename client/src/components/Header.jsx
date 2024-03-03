import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [currentSection, setCurrentSection] = useState("home");
  return (
    <div>
      <header>
        <nav>
          <h2>Carolina Sandoval</h2>
          <ul>
            <li className={currentSection === "home" ? "active" : ""}>
              <a onClick={() => setCurrentSection("home")}>
                <Link to="/">Home</Link>
              </a>
            </li>
            <li className={currentSection === "aboutme" ? "active" : ""}>
              <a onClick={() => setCurrentSection("aboutme")}>
                <Link to="/aboutme">About me</Link>
              </a>
            </li>
            <li className={currentSection === "portfolio" ? "active" : ""}>
              <a onClick={() => setCurrentSection("portfolio")}>
                <Link to="/portfolio">Portfolio</Link>
              </a>
            </li>
            <li className={currentSection === "resume" ? "active" : ""}>
              <a onClick={() => setCurrentSection("resume")}>
                <Link to="/resume">Resume</Link>
              </a>
            </li>
            <li className={currentSection === "contact" ? "active" : ""}>
              <a onClick={() => setCurrentSection("contact")}>
                <Link to="/contact">Contact</Link>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
