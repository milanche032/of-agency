import React from "react";
import "./Features.css";
import { Feature } from "../../components";

const featureList = [
  {
    heading: "Improving end distrusts instantly",
    desc: "From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.",
  },
  {
    heading: "Become the tended active",
    desc: "Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.",
  },
  {
    heading: "Message or am nothing",
    desc: "Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.",
  },
  {
    heading: "Really boy law county",
    desc: " Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h2 className="gradient__text">
          The Future is Now and You Just Need To Realize It. Step into Future
          Today & Make it Happen.
        </h2>
        <a href="#home">Request Early Access to Get Started</a>
      </div>
      <div className="gpt3__features-list">
        {featureList.map((item) => (
          <Feature heading={item.heading} desc={item.desc} />
        ))}
      </div>
    </div>
  );
};

export default Features;
