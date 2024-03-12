import React, { useState } from "react";
import ProgressBar from './ProgressBar'
import "../App.css";
import '../styles/animations.css'

const Header = () => {
  const [currentSection, setCurrentSection] = useState("home");
  return (
    <div>
      <header>
        <nav>
          <div className="name-header">
            <h4>Sandoval</h4>
          </div>
          <ul className = "sections-container">
            <li
              className={currentSection === "home" ? "active" : ""}
              onClick={() => setCurrentSection("home")}
            >
              <a href= '#home-sec'>Home</a>
            </li>
            <li
              className={currentSection === "aboutme" ? "active" : ""}
              onClick={() => setCurrentSection("aboutme")}
            >
              <a href='#aboutme-sec'>About me</a>
            </li>
            <li
              className={currentSection === "portfolio" ? "active" : ""}
              onClick={() => setCurrentSection("portfolio")}
            >
              <a href='#portfolio-sec'>Portfolio</a>
            </li>
            <li
              className={currentSection === "resume" ? "active" : ""}
              onClick={() => setCurrentSection("resume")}
             >
              <a href='#resume-sec'>Skills & tools</a>

            </li>
            <li
              className={currentSection === "contact" ? "active" : ""}
              onClick={() => setCurrentSection("contact")}
            >
                <a href = '#contact-sec'>Contact</a>
                
            </li>
          </ul>
      <ProgressBar/>
        </nav>
      </header>
    </div>
  );
};

export default Header;
