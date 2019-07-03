import React from "react";
import "./Landing.css";
import Nav from "../Nav/Nav";

const Landing = () => {
  return (
    <React.Fragment>
      <header>
        <Nav />
        <div className="text-box">
          <h1 className="text">
            Get Aquinted With leading Industry Skills for tomorrow!
          </h1>
          <a href="#" className="btn">
            Get Started
          </a>
        </div>
      </header>{" "}
    </React.Fragment>
  );
};

export default Landing;
