import React, { useState } from "react";
import "./Possibility.css";
import Spline from "@splinetool/react-spline";

const Possibility = () => {
  const [error, setError] = useState(null);

  const handleSplineError = (error) => {
    setError(error);
    console.log(error);
  };
  return (
    <div className="gpt3__poss section__padding" id="possibility">
      <div className="gpt3__poss-content">
        <h3>Company Name</h3>
        <h2 className="gradient__text">About Us</h2>
        <p>
          At [Your Company Name], we are passionate about empowering OnlyFans
          creators to achieve their fullest potential. With a deep understanding
          of the platform and years of experience in digital marketing, we
          provide tailored management services that elevate your brand and
          maximize your earnings. Our dedicated team works behind the scenes to
          handle every aspect of your OnlyFans presence, from strategic content
          planning to fan engagement and financial reporting. We believe in a
          partnership approach, where your vision and our expertise combine to
          create exceptional results. Discover why we’re the trusted partner for
          creators looking to take their OnlyFans career to the next level.
        </p>
        <a href="#home">Request Early Access to Get Started</a>
      </div>
      <div className="gpt3__poss-img">
        {error ? (
          <div>Error loading Spline scene: {error.message}</div>
        ) : (
          <Spline
            scene="https://prod.spline.design/Y18SYZ21uiKs5lmW/scene.splinecode"
            onError={handleSplineError}
          />
        )}
      </div>
    </div>
  );
};

export default Possibility;
