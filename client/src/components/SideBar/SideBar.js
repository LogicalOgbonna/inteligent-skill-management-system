import React from "react";
import logo from "../images/logo.png";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const SideBar = ({ page, user, logout }) => {
  return (
    <div
      className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box"
      id="navigation"
    >
      <div className="logo">
        <a href="home.html">
          <img src={logo} alt="logo" className="hidden-xs hidden-sm" />
          <img
            src={logo}
            alt="logo"
            className="visible-xs visible-sm circle-logo"
          />
        </a>
      </div>
      <div className="navi">
        {user.admin ? (
          <ul>
            <li className={`${page === "dashboard" ? "active" : ""}`}>
              <a href="/dashboard">
                <i className="fa fa-home" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Dashboard</span>
              </a>
            </li>
            <li className={`${page === "test" ? "active" : ""}`}>
              <a href="/upload-personality">
                <i className="fa fa-tasks" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Upload Test</span>
              </a>
            </li>
            <li className={`${page === "career" ? "active" : ""}`}>
              <a href="/upload-career">
                <i className="fa fa-bar-chart" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Upload Career</span>
              </a>
            </li>
            <li className={`${page === "profile" ? "active" : ""}`}>
              <a href="/profile">
                <i className="fa fa fa-user" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Profile</span>
              </a>
            </li>
            <li>
              <a href="" onClick={() => logout()}>
                <i className="fa fa-sign-out" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Logout</span>
              </a>
            </li>
          </ul>
        ) : (
          <ul>
            <li className={`${page === "dashboard" ? "active" : ""}`}>
              <a href="/">
                <i className="fa fa-home" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Dashboard</span>
              </a>
            </li>
            <li className={`${page === "specialty" ? "active" : ""}`}>
              <a href="/specialty">
                <i className="fa fa-tasks" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Specialties</span>
              </a>
            </li>
            <li className={`${page === "test" ? "active" : ""}`}>
              <a href="/test">
                <i className="fa fa-bar-chart" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Personality Test</span>
              </a>
            </li>

            <li className={`${page === "profile" ? "active" : ""}`}>
              <a href="/profile">
                <i className="fa fa-user" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Profile</span>
              </a>
            </li>
            <li>
              <a href="" onClick={() => logout()}>
                <i className="fa fa-sign-out" aria-hidden="true" />
                <span className="hidden-xs hidden-sm">Logout</span>
              </a>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  user: state.user.user
});
export default connect(
  mapStateToProps,
  { logout }
)(SideBar);
