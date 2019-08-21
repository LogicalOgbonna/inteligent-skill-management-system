import propTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
// import Services from "../../components/Services";
import Footer from "../../components/Footer/Footer";
import "../../codegig_html/css/style.css"

const Landing = ({ isAuthenticated }) => {
  return (
    <div>
    <header>
    <h2><a href="/"><i className="fas fa-code"></i>
        Code</a></h2>
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/al">All Gigs</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  </header>

  <section id="search" className="search-wrap">
    <h1>Find A Code Career</h1>
    <form action="gigs.html" className="search-form">
      <i className="fas fa-search"></i>
      <input type="search" name="term" placeholder="Javascript, PHP, Rails, etc..." />
      <input type="submit" value="Search" />
    </form>
  </section>
      {/* <Header isAuthenticated={isAuthenticated} />
      <Banner isAuthenticated={isAuthenticated} /> */}
      {/* <Services /> */}
      {/* <Footer isAuthenticated={isAuthenticated} /> */}
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
