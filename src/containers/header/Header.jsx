import React, { useState } from "react";
import "./Header.css";
import people from "../../assets/people.png";
import Spline from "@splinetool/react-spline";

const Header = () => {
  const [error, setError] = useState(null);

  const handleSplineError = (error) => {
    setError(error);
    console.log(error);
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Maximize Your OnlyFans Potential</h1>
        <p>
          Unlock your true earning potential with our expert OnlyFans management
          services. We handle the strategy, marketing, and fan engagement so you
          can focus on creating content and growing your brand.
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Your email address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access a visit in last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        {error ? (
          <div>Error loading Spline scene: {error.message}</div>
        ) : (
          <Spline
            scene="https://prod.spline.design/LrxurnwkVCt0LB7x/scene.splinecode"
            onError={handleSplineError}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
