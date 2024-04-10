import React from "react";
import "./Possibility.css";
import possibility from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__poss section__padding" id="possibility">
      <div className="gpt3__poss-img">
        <img src={possibility} alt="possibility" />
      </div>
      <div className="gpt3__poss-content">
        <h3>Request Early Access to Get Started</h3>
        <h2 className="gradient__text">The possibilities are beyond your imagination</h2>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <a href="#home">Request Early Access to Get Started</a>
      </div>
    </div>
  );
};

export default Possibility;
