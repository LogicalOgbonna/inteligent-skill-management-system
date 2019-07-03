import React from "react";
import validator from "validator";
import propTypes from "prop-types";
import { connect } from "react-redux";

import { login, register } from "../actions/auth";
import RegisterForm from "../common/RegisterForm";
import "./Banner.css";
import Slider from "./Slider";
// import Card from "../common/Card";
// import history from "../utils/history";

class Banner extends React.Component {
  state = {
    email: "",
    password: "",
    confirm_password: "",
    login: false,
    errors: {},
    name: "",
    loading: false
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onLogin = e => {
    e.preventDefault();
    this.setState({ login: !this.state.login });
  };

  componentWillReceiveProps(nextProp) {
    if (nextProp.authError) {
      let errors = {};
      if (nextProp.authError.password)
        errors.password = nextProp.authError.password;
      if (nextProp.authError.confirm_password)
        errors.confirm_password = nextProp.authError.confirm_password;
      if (nextProp.authError.email) errors.email = nextProp.authError.email;
      if (nextProp.authError.name) errors.name = nextProp.authError.name;

      this.setState({ errors, loading: false });
    }
  }
  validateSignUp = data => {
    const errors = {};
    if (!data.password) errors.password = "Enter Password";
    if (!data.name) errors.name = "Enter name";
    if (!data.email) errors.email = "Enter Email";
    if (!validator.isEmail(data.email)) errors.email = "Invalid Email";
    if (data.password !== data.confirm_password)
      errors.confirm_password = "Password must match";

    return errors;
  };

  validateLogin = data => {
    const errors = {};
    if (!data.password) errors.password = "Enter Password";
    if (!data.email) errors.email = "Enter Email";
    if (!validator.isEmail(data.email)) errors.email = "Invalid Email";

    return errors;
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.login) {
      const data = {
        email: this.state.email,
        password: this.state.password
      };
      const errors = this.validateLogin(data);
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.setState({ loading: true });
        this.props.login(data);
      }
    } else {
      const errors = this.validateSignUp(this.state);
      this.setState({ errors });
      if (Object.keys(errors).length === 0) {
        this.setState({ loading: true });
        this.props.register(this.state);
      }
    }
  };
  render() {
    return (
      <div className="banner" id="home">
        <div className="layer">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 banner-text-w3pvt">
                <Slider />
              </div>
              <div className="col-lg-5 col-md-8 px-lg-3 px-0">
                <div className="banner-form-w3 ml-lg-5">
                  {!this.props.isAuthenticated ? (
                    <div className="padding">
                      <RegisterForm
                        loading={this.state.loading}
                        onSubmit={this.onSubmit}
                        email={this.state.email}
                        password={this.state.password}
                        confirm_password={this.state.confirm_password}
                        onChange={this.onChange}
                        login={this.state.login}
                        onLogin={this.onLogin}
                        errors={this.state.errors}
                        name={this.state.name}
                      />
                    </div>
                  ) : (
                    <div className="">{/* <Card /> */}</div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user,
  authError: state.user.authError
});

export default connect(
  mapStateToProps,
  { login, register }
)(Banner);

Banner.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};
