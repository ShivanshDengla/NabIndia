import React from "react";
import "./Supporters.css";

const supporters = [
  {
    name: "CAF India",
    logo: "/images/Supporters/caf-logo-scaled.gif",
  },
  {
    name: "DIL Limited",
    logo: "/images/Supporters/DIL-Limited.jpg",
  },
  {
    name: "DL Shah Trust",
    logo: "/images/Supporters/dlshah-logo-2.png",
  },
  {
    name: "GIC Re",
    logo: "/images/Supporters/gic-logo-new-2.png",
  },
  {
    name: "Give India",
    logo: "/images/Supporters/give-india.jpeg",
  },
  {
    name: "IDFC AMC",
    logo: "/images/Supporters/IDFC-AMC-logo-high-res-scaled.jpg",
  },
  {
    name: "MCX",
    logo: "/images/Supporters/MCX.png",
  },
  {
    name: "The New India Assurance",
    logo: "/images/Supporters/New-India-Assurance.png",
  },
  {
    name: "ONGC",
    logo: "/images/Supporters/ONGC.png",
  },
  {
    name: "SBI",
    logo: "/images/Supporters/Sbi.png",
  },
  {
    name: "STCI",
    logo: "/images/Supporters/STCI.jpg",
  },
  {
    name: "Union Bank of India",
    logo: "/images/Supporters/UBI.png",
  },
  {
    name: "UTI Mutual Fund",
    logo: "/images/Supporters/uti_logo.png",
  },
];

const Supporters = () => {
  return (
    <div className="supporters-section">
      <h2>Our Supporters</h2>
      <div className="supporters-slider" role="region" aria-label="Our Supporters">
        <div className="supporters-track">
          {supporters.map((supporter, index) => (
            <div className="supporter-slide" key={index}>
              <img
                src={process.env.PUBLIC_URL + supporter.logo}
                alt={supporter.name}
              />
            </div>
          ))}
          {supporters.map((supporter, index) => (
            <div className="supporter-slide" key={index + supporters.length}>
              <img
                src={process.env.PUBLIC_URL + supporter.logo}
                alt={supporter.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Supporters; 