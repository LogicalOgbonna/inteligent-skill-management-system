import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import propTypes from "prop-types";
import { connect } from "react-redux";

import Landing from "./pages/Landing/Landing";
import Dashboard from "./pages/Dashboard/Dashboard";
import Personality from "./pages/Personality/Personality";
import Career from "./pages/CareerPath/CareerPath";
import UserRoute from "./routes/UserRoute";
import Test from "./pages/Personality/Test";

import UploadPersonalityTest from "./pages/UploadPersonalityTest/UploadPersonalityTest";
import UploadCareer from "./pages/UploadCareer/UploadCareer";
import Specialty from "./pages/Specialty/Specialty";
import Login from "./components/Banner/Banner";

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;
    return (
      <Switch>
        <Route path="/" exact name="Home" component={Landing} />
        <Route path="/login" exact name="Home" component={Login} />
        <UserRoute
          path="/dashboard"
          exact
          name="Dashboard"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
        />
        <UserRoute
          path="/personality"
          exact
          name="Personality"
          component={Personality}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/career"
          exact
          name="Career"
          component={Career}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/specialty"
          exact
          name="Career"
          component={Specialty}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/specialty/:id"
          exact
          name="Career"
          component={Specialty}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/test"
          exact
          name="Test"
          component={Test}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/upload-personality"
          exact
          name="Upload Personality Test"
          component={UploadPersonalityTest}
          isAuthenticated={isAuthenticated}
        />

        <UserRoute
          path="/upload-career"
          exact
          name="Upload Career"
          component={UploadCareer}
          isAuthenticated={isAuthenticated}
        />
      </Switch>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

App.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

export default connect(mapStateToProps)(App);
