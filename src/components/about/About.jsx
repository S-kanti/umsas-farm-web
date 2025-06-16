import React, { useState, useEffect } from "react";
import "./about.css";
import about from "../../assets/about.png";

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="about-section container">
      <div className="about-img-div">
        <img src={about} alt="About Umsas Farm" className="about-img" />
      </div>
      <div className="about-text">
        <h2>🌾 About Us</h2>

        <p>
          At Umsas Farm, we take pride in raising and nurturing some of the
          finest livestock nature has to offer. Our farm is home to rare Cou
          sheep, healthy goats, and a thriving poultry section where we raise
          chickens and produce fresh eggs daily.
        </p>

        {(!isMobile || isExpanded) && (
          <>
            <p>
              We are more than just a farm — we are a community rooted in
              passion, care, and sustainable practices. From rare breeds to
              everyday essentials, every animal and product is raised with the
              utmost attention to health, hygiene, and ethical standards.
            </p>
            <p>
              Whether you're looking for premium livestock or fresh, farm-raised
              poultry and eggs, Umsas Farm is your trusted partner for natural,
              quality produce straight from the source.
            </p>
          </>
        )}

        {isMobile && (
          <p className="read-more-toggle" onClick={toggleReadMore}>
            {isExpanded ? "Show less ▲" : "Read more ▼"}
          </p>
        )}
      </div>
    </section>
  );
};

export default About;
