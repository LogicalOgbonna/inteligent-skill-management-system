import React from "react";
import propTypes from "prop-types";
import "bootstrap";
import { connect } from "react-redux";

import "./Header.css";
import logo from "./images/s2.png";
import { Link } from "react-router-dom";
import { logout } from "../actions/auth";

const Header = ({ isAuthenticated, user, logout }) => {
  return (
    <header>
      <div className="top-head container">
      </div>
      <div className="container">
        <nav className="py-3 d-lg-flex">
          <div id="logo">
            <h1>
              {" "}
              <Link to="/">
                <img src={logo} alt="" />
                IMS{" "}
              </Link>
            </h1>
          </div>
          <label htmlFor="drop" className="toggle">
            <span className="fa fa-bars" />
          </label>
          <input type="checkbox" id="drop" />
          <ul className="menu ml-auto mt-1">
            <li className="active">
              <Link to="/">Home</Link>
            </li>

            <li className="">
              <a href="#services">Services</a>
            </li>
            {!isAuthenticated && (
              <li className="">
                <Link to="#login">Login</Link>
              </li>
            )}

            {isAuthenticated && (
              <span className="">
                <li className="">
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item dropdown mr-3">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    <img
                      className="rounded-circle"
                      style={{ width: "20px", marginRight: "5px" }}
                      src={user.avatar}
                      alt="user"
                      title="You must have a Gravatar connected to your email to display your image "
                    />{" "}
                    {`Welcome ${user.name}`}
                  </a>
                  <div className="dropdown-menu">
                    <Link to="/profile" className="dropdown-item">
                      <i className="fas fa-user-circle" /> Profile
                    </Link>

                    <Link to="/settings" className="dropdown-item">
                      <i className="fas fa-cog" /> Settings
                    </Link>

                    <Link
                      onClick={() => logout()}
                      to="/login"
                      className="dropdown-item"
                    >
                      <i className="fas fa-user-times" /> Logout
                    </Link>
                  </div>
                </li>
              </span>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: propTypes.bool.isRequired,
  user: propTypes.object,
  logout: propTypes.func.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});
export default connect(
  mapStateToProps,
  { logout }
)(Header);
