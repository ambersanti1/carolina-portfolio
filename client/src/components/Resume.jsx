import React from 'react'
import CV from "../CV_AmberlySandoval.pdf";

function Resume() {
  return (
    <div className="resume-section">
      <h2>Resume</h2>
      <div className="resume-experience">
        <h3>Full Stack Web Development</h3>
        <ul>
          <li>HTML</li>
          <li>CSS and Bootstrap</li>
          <li>JavaScript</li>
          <li>Node.js and Express</li>
          <li>MySQL and MongoDB</li>
          <li>React</li>
        </ul>
      </div>
      <div className="resume-experience">
        <h3>AI Applications and Prompt Engineering</h3>
        <p>
          This certification signifies a comprehensive understanding of AI
          frameworks, tools, and applications, coupled with the ability to craft
          effective prompts for diverse AI systems
        </p>
      </div>
      <div className="resume-experience">
        <a
          href={CV}
          download="CV_AmberlySandoval"
          target="_blank"
          rel="noreferrer"
        >
          <button>Download it</button>
        </a>
      </div>
    </div>
  );
}

export default Resume;