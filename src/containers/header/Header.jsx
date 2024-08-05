import React, { useState } from "react";
import "./Header.css";
import people from "../../assets/people.png";
import Spline from '@splinetool/react-spline';


const Header = () => {

  const [error, setError] = useState(null);

  const handleSplineError = (error) => {
    setError(error);
    console.log(error);
  };

  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let’s Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
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
            scene="https://prod.spline.design/ktJ2btuQS0Vq2pgF/scene.splinecode"
            onError={handleSplineError}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
