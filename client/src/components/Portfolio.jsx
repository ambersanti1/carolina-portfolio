import React from 'react'
import meditrack from "../img/meditrack-logo (2).png";
import treefund from "../img/treefund-logo.png";
import journal from '../img/journal-logo (2).png'
import home from '../img/home-img.jpg'

const Portfolio = () => {
  return (
    <div id="portfolio-sec" class="projects-section">
      <div class="portfolio-container">
        <h2>Work</h2>
        <p>This are some of the projects I've been working on</p>
        <div class="project">
          <div class="both-title-description right">
            <h3>Meditrack</h3>
            <p class="description">
              Schedule appointments and keep track of the medical treatment
            </p>
            <button className="portfolio-btn">View website</button>
            <button className="portfolio-btn">View GitHub repository</button>
          </div>
          <img src={meditrack} alt="" />
        </div>
        <div class="project reverse ">
          <div class="both-title-description left">
            <h3>Journal</h3>
            <p class="description">Add, edit, save and delete notes</p>
            <button className="portfolio-btn">View website</button>
            <button className="portfolio-btn">View GitHub repository</button>
          </div>
          <img src={journal} alt="" />
        </div>
        <div class="project">
          <div class="both-title-description right">
            <h3>Tree Fund</h3>
            <p class="description">
              Accepts donations through stripe to plant trees in Mexico
            </p>
            <button className="portfolio-btn">View website</button>
            <button className="portfolio-btn">View GitHub repository</button>
          </div>
          <img src={treefund} alt="" />
        </div>
        <div class="project reverse">
          <div class="both-title-description left">
            <h3>Project</h3>
            <p class="description">Coming soon</p>
            <button className="portfolio-btn">View website</button>
            <button className="portfolio-btn">View GitHub repository</button>
          </div>
          <img src={home} alt="" />
        </div>

      </div>
    </div>
  );
}

export default Portfolio