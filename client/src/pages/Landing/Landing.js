import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
// import Services from "../../components/Services";
import Footer from "../../components/Footer/Footer";
import "../../index.css";

const Landing = ({ isAuthenticated }) => {
  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <Banner isAuthenticated={isAuthenticated} />
      {/* <Services /> */}
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
