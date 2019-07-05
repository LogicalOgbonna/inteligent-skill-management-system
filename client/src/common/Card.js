import React from "react";
// import { Link } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";

import SVG from "./CardSVG";

import "./Card.css";
const Card = ({
  user,
  code,
  realistic,
  artistic,
  social,
  enterprising,
  convention,
  investigative
}) => {
  return (
    <div className="">
      <div className="card">
        <div className="additional">
          <div className="user-card">
            <div className="level center">Code: {code}</div>
            {/* <div className="points center">4 Points</div> */}
            <SVG />
          </div>
          <div className="more-info">
            <h1>{user.username}</h1>
            <div className="coords text-center">
              <span className="mr-5 "> RIASEC</span>
            </div>
            <div className="coords">
              <span>Realistic</span>
              <span className="ml-4">Artistic</span>
              <span>Investigative</span>
            </div>
            <div className="coords">
              <span>Social</span>
              <span className="ml-4">Conventional</span>
              <span>Enterprising</span>
            </div>
            <div className="stats">
              <div>
                <div className="title">R</div>
                <i className="fab fa-react" />
                <div className="value">{realistic}</div>
              </div>
              <div>
                <div className="title">I</div>
                <i className="fas fa-blind" />
                <div className="value">{investigative}</div>
              </div>
              <div>
                <div className="title">A</div>
                <i className="fas fa-snowboarding" />
                <div className="value">{artistic}</div>
              </div>
              <div>
                <div className="title">S</div>
                <i className="fa fa-users" />
                <div className="value">{social}</div>
              </div>
              <div>
                <div className="title">E</div>
                <i className="fas fa-comment-dollar" />
                <div className="value">{enterprising}</div>
              </div>
              <div>
                <div className="title">C</div>
                <i className="fas fa-user" />
                <div className="value">{convention}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="general">
          <h1>{user.username}</h1>
          <p className="text-justify">
            These are the results from the CAS RIASEC Test. Your scores for each
            of the 6 basic interest areas are below.
          </p>
          <span className="more">Mouse over the card for more info</span>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  user: propTypes.object.isRequired,
  code: propTypes.string.isRequired,
  realistic: propTypes.number.isRequired,
  artistic: propTypes.number.isRequired,
  social: propTypes.number.isRequired,
  enterprising: propTypes.number.isRequired,
  convention: propTypes.number.isRequired,
  investigative: propTypes.number.isRequired
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(Card);
