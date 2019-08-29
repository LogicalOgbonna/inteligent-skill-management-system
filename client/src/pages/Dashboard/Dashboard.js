import React, { Component } from "react";
import { connect } from "react-redux";
import { PushSpinner } from "react-spinners-kit";
import propType from "prop-types";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
// import "./style.css";

import { getProfile, createPropfile } from "../../actions/profile";

class Dashboard extends Component {
  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  // validate = data => {
  //   const errors = {};
  //   if (!data.name) errors.name = "Enter Name";
  //   if (!data.school) errors.school = "Enter School";
  //   if (!data.year) errors.year = "Enter Year";
  //   if (!data.bio) errors.bio = "Enter Bio";

  //   return errors;
  // };

  onSubmit = e => {
    const errors = this.validate(this.state);
    this.setState({ errors });
    if (Object.keys(errors).length === 0) {
      this.props.createPropfile(this.state);
    }
    e.preventDefault();
  };

  render() {
    return (
      <div className="dashboard">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="dashboard" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1>Dashboard</h1>
                <h1>Dashboard</h1>
              </div>
            </div>
          </div>
        </div>
        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

Dashboard.propType = {
  getProfile: propType.func.isRequired
};

const mapStateToProps = state => ({
  profile: state.user.profile,
  profileError: state.user.profileError,
  user: state.user.user
});

export default connect(
  mapStateToProps,
  { getProfile, createPropfile }
)(Dashboard);
