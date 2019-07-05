import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getTest } from "../../actions/test";
import { PushSpinner } from "react-spinners-kit";

import Nav from "../Nav";
import Footer from "../Footer";
import "./Personality.css";
import Holland from "./Holland.js";
class Personality extends Component {
  state = {
    questions: [],
    loading: true
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.tests.length) {
      let question = [];

      for (let i = 0; i < nextProps.tests.length; i++) {
        for (let j = 0; j < nextProps.tests[i].questions.length; j++) {
          question.push(nextProps.tests[i].questions[j]);
        }
      }

      this.setState({
        questions: question,
        loading: false
      });
    }
  }

  componentDidMount() {
    this.props.getTest();
  }
  render() {
    return (
      <div>
        <Nav active="personality" />
        {this.state.loading ? (
          <div className="col-md-6 offset-4 ">
            <div
              style={{
                marginTop: "20%",
                marginBottom: "20%",
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
          <div className="row">
            <div className="col-md-12">
              <Holland questions={this.state.questions} />
            </div>
          </div>
        )}
        <Footer isAuthenticated={this.props.isAuthenticated} />
      </div>
    );
  }
}
Personality.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  tests: state.user.tests
});

export default connect(
  mapStateToProps,
  { getTest }
)(Personality);
