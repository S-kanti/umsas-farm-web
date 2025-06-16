import React from "react";
import "./services.css";
import services1 from "../../assets/services1.png";
import services2 from "../../assets/services2.png";
import services3 from "../../assets/services3.png";
import services4 from "../../assets/services4.png";

const Services = () => {
  return (
    <section className="services-section container">
      <h2>🌿 What We Do</h2>
      <div className="services-container">
        <div className="services">
          <div>
            <img src={services1} alt="Services" className="servioces-img" />
            <h4>Farming</h4>
            <p>
              We grow fresh, organic crops using sustainable farming methods.
            </p>
          </div>
          <div>
            <button className="services-btn">Explore more</button>
          </div>
        </div>

        <div className="services">
            <div>
          <img src={services2} alt="Services" className="servioces-img" />
          <h4>Cow Rearing</h4>
          <p>Our cows are raised naturally to provide quality milk and meat.</p>
          </div>          
          <button className="services-btn">Explore more</button>
        </div>
        <div className="services">
            <div>
          <img src={services3} alt="Services" className="servioces-img" />
          <h4>Goat & Sheep</h4>
          <p>
            We rear healthy goats and rare Cou sheep known for their hardiness.
          </p>
          </div>
          <button className="services-btn">Explore more</button>
        </div>
        <div className="services">
            <div>
          <img src={services4} alt="Services" className="servioces-img" />
          <h4>Poultry</h4>
          <p>
            Our poultry section produces clean, farm-raised chickens and eggs.
          </p>
          </div>
          <button className="services-btn">Explore more</button>
        </div>
      </div>
    </section>
  );
};

export default Services;
