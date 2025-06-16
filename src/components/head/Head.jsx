import React from "react";
import "./head.css";
import head from "../../assets/head.png";
import Nav from "../nav/Nav";

const Head = () => {
  return (
    <div className="hero-container" id="home">
      <img src={head} alt="Head" className="head-img" />
      <Nav />
      <div className="head-content">
        <h1>Welcome to Umsas Farm</h1>
        <h3 className="subheading">We specializes in growing and selling fresh produce.</h3>
        <div className="btns-container">
        <button className="order-btn btn">Place Order</button>
        {/* <button className="contact-btn btn">Contact Us</button> */}
        </div>
      </div>
    </div>
  );
};

export default Head;
