import React from "react";
import Lottie from "lottie-react";
import animationData from "../assets/girl.json";
import caro from "../img/carito.jpg";

const AboutMe = () => {
  return (
    <div id="aboutme-sec" class="about-me-section">
      <div class="aboutme-container">
        <div className="text-about-me">
          <div className="aboutme-profile">
            <img class="profile-photo" src={caro} alt="" />
            <h2>About me</h2>
          </div>
          <p>
            I'm a passionate web developer dedicated to crafting engaging
            digital experiences. With a strong foundation in front-end and
            back-end development, I thrive on turning ideas into reality through
            clean code and intuitive design. Let's create something awesome
            together!
            <br /> I am very passionate about my profession and I am always
            trying new things to build a cleaner code and a prettier interface.
          </p>
        </div>
        <Lottie animationData={animationData} />  
      </div>
    </div>
  );
};

export default AboutMe;
