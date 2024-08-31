import React, { useState } from "react";
import "./Features.css";
import { Feature } from "../../components";
import Spline from "@splinetool/react-spline";

const featureList = [
  {
    heading: "What does an OnlyFans management service do?",
    desc: "We handle everything from content strategy and marketing to fan engagement and financial management, so you can focus on creating content.",
  },
  {
    heading: "How do I get started with your service?",
    desc: "Simply contact us through our website, and we’ll set up an initial consultation to discuss your goals and how we can help.",
  },
  {
    heading: "How much does your service cost?",
    desc: "We offer various pricing plans tailored to your needs. Visit our Pricing page for more details.",
  },
  {
    heading: "Will I still have control over my OnlyFans account?",
    desc: "Absolutely. You retain full control, and we work closely with you to ensure your brand vision is maintained.",
  },
  {
    heading: "Can you help me grow my subscriber count?",
    desc: "Yes, we specialize in targeted marketing and promotion strategies that are designed to increase your subscribers and revenue.",
  },
];

const Features = () => {
  const [error, setError] = useState(null);

  const handleSplineError = (error) => {
    setError(error);
    console.log(error);
  };

  return (
    <div id="faq" className="gpt3__features section__padding">
      <div className="gpt3__features-heading">
        <h2 className="gradient__text">Frequently Asked Questions</h2>
        <p>
          Got questions? We’ve got answers. Explore our FAQs to learn more about
          how our OnlyFans management services work, what you can expect, and
          how we help you maximize your success on the platform.
        </p>
        <div className="gpt3__header-image">
          {error ? (
            <div>Error loading Spline scene: {error.message}</div>
          ) : (
            <Spline
              scene="https://prod.spline.design/mZekTLPRBg25XFYf/scene.splinecode"
              onError={handleSplineError}
            />
          )}
        </div>
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
