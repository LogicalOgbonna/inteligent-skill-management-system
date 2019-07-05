import React, { Component } from "react";
import { connect } from "react-redux";
import { PushSpinner } from "react-spinners-kit";
import propType from "prop-types";

import Nav from "../Nav";
import Footer from "../Footer";
import "./Dashboard.css";
import Display from "./Display";
import About from "./About";

import { getProfile, createPropfile } from "../../actions/profile";

class Dashboard extends Component {
  state = {
    hasProfile: false,
    profile: [],
    name: "",
    school: "",
    year: "",
    bio: "",
    errors: {},
    loading: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.profile !== undefined) {
      this.setState({
        hasProfile: false,
        loading: false
      });
    }
    if (nextProps.profile !== null) {
      this.setState({
        hasProfile: true,
        loading: false,
        profile: nextProps.data
      });
    } else {
      this.setState({ loading: false });
    }
  }
  componentDidMount() {
    this.props.getProfile();
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  validate = data => {
    const errors = {};
    if (!data.name) errors.name = "Enter Name";
    if (!data.school) errors.school = "Enter School";
    if (!data.year) errors.year = "Enter Year";
    if (!data.bio) errors.bio = "Enter Bio";

    return errors;
  };

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
      <React.Fragment>
        <Nav active="dashboard" />

        {this.state.loading ? (
          <div className="col-md-6 offset-4 ">
            <div
              style={{
                marginTop: "50%",
                marginLeft: "auto",
                marginRight: "auto"
              }}
              className="center-spinner"
            >
              <PushSpinner
                size={50}
                color="#686769"
                loading={this.state.loading}
              />
            </div>
          </div>
        ) : (
          <React.Fragment>
            {this.state.hasProfile ? (
              <Display admin={this.props.user.admin} />
            ) : (
              <About
                onChange={this.onChange}
                onSubmit={this.onChange}
                name={this.state.name}
                year={this.state.year}
                errors={this.state.errors}
                school={this.state.school}
              />
            )}
          </React.Fragment>
        )}
        <Footer isAuthenticated={true} />
      </React.Fragment>
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
