import React from 'react'
import avatar from "../img/avatar.png";

const Home = () => {
  return (
    <>
      <div class="home-section">
        <div class="home-container">
          <div class="texto">
            <h1 class="hello">Hello! I'm </h1>{" "}
            <h1 class="carolina">
              Carolina <span class="sandoval">Sandoval</span>
            </h1>
            <h1 class="hello">and this is my portfolio </h1>{" "}
          </div>
          <div class="profile-photo">
            <img src={avatar} alt="" />
            <div class="circle-home c1"></div>
            <div class="circle-home c2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home