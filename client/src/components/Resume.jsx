import React from "react";
import otherItems from '../lists/items'

function Resume() {

  return (
    <div id="resume-sec" className="resume-section">
      <div className="resume-title">
        <h2>Skills & tools</h2>
      </div>
      <p>
        The skills, tools and technologies I use to bring your products to life:
      </p>

      <div className="icons-container">
        {otherItems.map((item) => (
          <i
            key={item.id}
            className={` icon  ${item.icon}`}
            style={{ color: "#FFFF" }}
          >
            <p>{item.name}</p>
          </i>
        ))}
      </div>
    </div>
  );
}

export default Resume;
