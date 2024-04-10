import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";

const footerLins = [
  {
    heading: "Links",
    links: [
      {
        text: "Overons",
        link: "#home",
      },
      {
        text: "Social Media",
        link: "#home",
      },
      {
        text: "Counters",
        link: "#home",
      },
      {
        text: "Contact",
        link: "#home",
      },
    ],
  },
  {
    heading: "Company",
    links: [
      {
        text: "Terms and Conditions",
        link: "#home",
      },
      {
        text: "Privacy policy",
        link: "#home",
      },
      {
        text: "Contact",
        link: "#home",
      },
    ],
  },
  {
    heading: "Get in touch",
    links: [
      {
        text: "Crechterwoord K12 182 DK Alknjkcb",
        link: "#home",
      },
      {
        text: "085-132567",
        link: "tel:0085132567",
      },
      {
        text: "info@payme.net",
        link: "mailto:info@payme.net",
      },
    ],
  },
];

const Footer = () => {
  return (
    <div className="gpt3__footer section__padding">
      <div className="gpt3__footer-cta">
        <h2 className="gradient__text">
          Do you want to step in to the future before others
        </h2>
        <a href="#home">Request Early Access</a>
      </div>
      <div className="gpt3__footer-main">
        <div>
          <img src={logo} alt="logo" />
          <p>
            Crechterwoord K12 182 DK Alknjkcb, <br /> All Rights Reserved
          </p>
        </div>
        <div className="gpt3__footer-shortlinks">
          {footerLins.map((item) => (
            <div>
              <h3>{item.heading}</h3>
              <ul>
                {item.links.map((listItem) => (
                  <li><a href={listItem.link}>{listItem.text}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
