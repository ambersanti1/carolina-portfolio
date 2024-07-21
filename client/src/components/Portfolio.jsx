import { React } from "react";
import projects from '../lists/projects'
import "../styles/animations.css";

const Portfolio = () => {
  return (
    <div id="portfolio-sec" class="projects-section">
      <div class="portfolio-container">
        <h2>Work</h2>
        <p>
          Check out some of the projects I've been working on! I've put my heart
          and soul into each one, aiming for top-notch results. Dive into my
          portfolio to see what I can do. I'm all about taking on fresh
          challenges and adding value to cool projects that matter!
        </p>
        {projects.map((item) => (
          <div class={` project  ${item.reverse}`}>
            <div class={` both-title-description ${item.direction}`}>
              <h4>{item.project_title}</h4>
              <p class={` description ${item.direction_p}`}>
                {item.project_description}
                <br />
                <br />
                <i className={`icon-portfolio ${item.icon1}`}></i>
                <i className={`icon-portfolio ${item.icon2}`}></i>
                <i className={`icon-portfolio ${item.icon4}`}></i>
                <i className={`icon-portfolio-3 ${item.icon3}`}>
                  <p style={{ fontSize: "10px", margin: "3px" }}>
                    {item.pIcon}
                  </p>
                </i>
              </p>
              <a href={`${item.link}`}>
                <button className="portfolio-btn">View website</button>
              </a>
              {/* <a href={`${item.linkGit}`}>
                <button className="portfolio-btn">
                  View GitHub repository
                </button>
              </a> */}
            </div>
            <div className="contenedor">
              <img className="image" src={item.project_img} alt="" />
              <div className="overlay">
                <img src={item.project_img2} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
