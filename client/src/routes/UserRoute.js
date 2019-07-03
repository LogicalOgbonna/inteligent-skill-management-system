import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const UserRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => (true ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

UserRoute.propTypes = {
  component: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired
};

const mapStateToProps = state => ({
  // isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(UserRoute);
