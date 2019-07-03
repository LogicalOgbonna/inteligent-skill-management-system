import React from "react";
import "./Nav.css";

const Nav = ({ dashboard }) => {
  return (
    <nav>
      <div className="row">
        {dashboard ? (
          <ul className="main-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Department</a>
            </li>
            <li>
              <a href="#"></a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
          </ul>
        ) : (
          <ul className="main-nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
