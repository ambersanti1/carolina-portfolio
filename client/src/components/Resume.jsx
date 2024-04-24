import React from "react";
import otherItems from '../lists/items'

function Resume() {

  return (
    <div id="resume-sec" className="resume-section">
      <h2>Skills & tools</h2>
      <div className="resume-sec">
        <p>
          My toolkit for bringing your products to life? It's like my secret
          sauce for creativity! From coding tricks to slick design software,
          I've got what it takes to make your ideas shine.
        </p>
      </div>

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
