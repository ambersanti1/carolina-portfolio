import React from 'react'
import meditrack from "../img/meditrack3.png";
import treefund from "../img/treefund.avif";
import journal from '../img/journal.webp'
import home from '../img/home-img.jpg'

const Portfolio = () => {
  return (
    <div id="projects-sec" class="projects-section">

    <div class="galeria">
      <h2>Projects</h2>
      <div class="project">
        <div class="both-title-description right">
          <h3 class = "title">Meditrack</h3>
          <p class = "description">
            Schedule appointments and keep track of the medical treatment
          </p>
        </div>
        <img src={meditrack} alt=""/>
      </div>
      <div class="project reverse ">
        <div class="both-title-description left">
          <h3 class = "title">Journal</h3>
          <p class = "description">
            Add, edit, save and delete notes
          </p>
        </div>
        <img src={journal} alt=""/>
      </div>
      <div class="project">
        <div class="both-title-description right">
          <h3 class = "title">Tree Fund</h3>
          <p class = "description">
            Accepts donations through stripe to plant trees in Mexico
          </p>
        </div>
        <img src={treefund} alt=""/>
      </div>
      <div class="project reverse">
        <div class="both-title-description left">
          <h3 class = "title">Project</h3>
          <p class = "description">
            Coming soon
          </p>
        </div>
        <img src={home} alt=""/>
      </div>
      <div class="project ">
        <div class="both-title-description right">
          <h3 class = "title">Project</h3>
          <p class = "description">
            Coming soon
          </p>
        </div>
        <img src={home} alt=""/>
      </div>
      <div class="project reverse">
        <div class="both-title-description left">
          <h3 class = "title">Project</h3>
          <p class = "description">
            Coming soon
          </p>
        </div>
        <img src={home} alt=""/>
      </div>

    </div>
  </div>
  )
}

export default Portfolio