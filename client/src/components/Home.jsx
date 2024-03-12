import React from "react";
import CV from "../assets/CV_AmberlySandoval.pdf";
import Lottie from "lottie-react";
import animationData from "../assets/sun3.json";

const Home = () => {
  return (
      <div id="home-sec" class="home-section">
        <div class="home-container">
          <div class="texto">
            <h1>Hello! I'm </h1>{" "}
            <h1 class="carolina">
              Carolina <span class="sandoval">Sandoval</span>
            </h1>
            <h1> Full Stack Web Developer </h1>{" "}
            <div className="download-cv">
              <a
                href={CV}
                download="CV_AmberlySandoval"
                target="_blank"
                rel="noreferrer"
              >
                <button>Download CV</button>
              </a>
            </div>
          </div>
          <Lottie className = "sun-lottie"animationData={animationData} />
        </div>
      </div>
  );
};

export default Home;
