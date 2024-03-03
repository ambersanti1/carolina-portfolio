import React from "react";
import family from "../img/family-transformed.jpeg";
import hiking from "../img/Hiking.jpg";
import friends from "../img/Friends.jpg";

const AboutMe = () => {
  return (
    <div id="about-me-sec" class="about-me-section">
      <h2>About me</h2>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" src={hiking} alt="First slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Hiking</h5>
              <p>Went to the highest mountain in Mexico</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={family} alt="Second slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Family</h5>
              <p>My parents are the most important part in my life</p>
            </div>
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src={friends} alt="Third slide" />
            <div class="carousel-caption d-none d-md-block">
              <h5>Friends</h5>
              <p>Love to hang out with my friends</p>
            </div>
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
