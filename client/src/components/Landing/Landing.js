import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Header from "../Header";
import Banner from "../Banner";
import Services from "../Services";
import Footer from "../Footer";
import "../../index.css";

const Landing = ({ isAuthenticated }) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <Banner isAuthenticated={isAuthenticated} />
      <Services />
      <Footer isAuthenticated={isAuthenticated} />
    </div>
  );
};

Landing.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps)(Landing);
