import {Link, React } from "react";
import projects from '../lists/projects'

const Portfolio = () => {
  return (
    <div id="portfolio-sec" class="projects-section">
      <div class="portfolio-container">
        <h2>Work</h2>
        <p>This are some of the projects I've been working on</p>
        {projects.map((item) => (
          <div class={` project  ${item.reverse}`}>
            <div class={` both-title-description ${item.direction}`}>
              <h4>{item.project_title}</h4>
              <p class={` description ${item.direction_p}`}>
                {item.project_description}
              </p>
              <a href={`${item.link}`}>
                <button className="portfolio-btn">View website</button>
              </a>
              <a href={`${item.linkGit}`}>
                <button className="portfolio-btn">
                  View GitHub repository
                </button>
              </a>
            </div>
            <img src={item.project_img} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
