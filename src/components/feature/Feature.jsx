import React from "react";
import "./Feature.css";

const Feature = ({heading, desc}) => {
  return (
    <div className="gpt3__feature">
      <div>
        <span className="gpt3__feature-line"></span>
        <h3>{heading}</h3>
      </div>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default Feature;
