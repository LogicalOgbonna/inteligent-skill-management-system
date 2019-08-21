import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { getTest } from "../../actions/test";
import { Link } from "react-router-dom";
import { PushSpinner } from "react-spinners-kit";

import Questions from "./Questions";
import Button from "./Button";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import "./Personality.css";
import Holland from "./Holland.js";
class Personality extends Component {
  state = {
    questions: [],
    index: 0,
    lastIndex: 0,
    loading: false,
    descipline: "",
    choice: "",
    type: "",
    weight: "",
    finished: false,
    test: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.tests.length) {
      let question = [];
      let questions = [];
      for (let i = 0; i < nextProps.tests.length; i++) {
        for (let j = 0; j < nextProps.tests[i].questions.length; j++) {
          question.push(nextProps.tests[i].questions[j]);
        }
      }

      questions.push(
        question.filter(question => question.type === this.state.descipline)
      );

      this.setState({
        questions: questions[0],
        loading: false,
        test: true,
        lastIndex: questions[0].length
      });
    }
  }

  next = () => {
    // const {
    //   realistic,
    //   investigative,
    //   artistic,
    //   social,
    //   enterprising,
    //   convention,
    //   type,
    //   weight
    // } = this.state;
    // type === "realistic" &&
    //   this.setState({
    //     ...this.state,
    //     realistic: realistic + weight
    //   });

    // type === "artistic" &&
    //   this.setState({
    //     ...this.state,
    //     artistic: artistic + weight
    //   });

    // type === "investigative" &&
    //   this.setState({
    //     ...this.state,
    //     investigative: investigative + weight
    //   });

    // type === "social" &&
    //   this.setState({
    //     ...this.state,
    //     social: social + weight
    //   });

    // type === "enterprising" &&
    //   this.setState({
    //     ...this.state,
    //     enterprising: enterprising + weight
    //   });

    // type === "convention" &&
    //   this.setState({
    //     ...this.state,
    //     convention: convention + weight
    //   });

    this.setState(prev => {
      return {
        index: prev.index + 1,
        lastIndex: this.state.questions.length - 1,
        choice: ""
      };
    });
  };

  previous = () => {
    this.state.answers.pop();
    // const {
    //   realistic,
    //   investigative,
    //   artistic,
    //   social,
    //   enterprising,
    //   convention,
    //   type,
    //   weight
    // } = this.state;
    // type === "realistic" &&
    //   this.setState({
    //     ...this.state,
    //     realistic: realistic - weight
    //   });

    // type === "artistic" &&
    //   this.setState({
    //     ...this.state,
    //     artistic: artistic - weight
    //   });

    // type === "investigative" &&
    //   this.setState({
    //     ...this.state,
    //     investigative: investigative - weight
    //   });

    // type === "social" &&
    //   this.setState({
    //     ...this.state,
    //     social: social - weight
    //   });

    // type === "enterprising" &&
    //   this.setState({
    //     ...this.state,
    //     enterprising: enterprising - weight
    //   });

    // type === "convention" &&
    //   this.setState({
    //     ...this.state,
    //     convention: convention - weight
    //   });
    this.setState(prev => {
      return {
        index: prev.index - 1
      };
    });
  };

  sortNumbers(a, b) {
    return a.value - b.value;
  }

  finish = () => {
    // const array = [];
    // array.push({ value: this.state.realistic, name: "realistic" });
    // array.push({ value: this.state.investigative, name: "investigative" });
    // array.push({ value: this.state.artistic, name: "artistic" });
    // array.push({ value: this.state.social, name: "social" });
    // array.push({ value: this.state.enterprising, name: "enterprising" });
    // array.push({ value: this.state.convention, name: "convention" });

    // const sortedNumbers = array.sort(this.sortNumbers);
    // const code = `${sortedNumbers[5].name
    //   .charAt(0)
    //   .toUpperCase()}${sortedNumbers[4].name
    //   .charAt(0)
    //   .toUpperCase()}${sortedNumbers[3].name.charAt(0).toUpperCase()}`;
    // localStorage.code = JSON.stringify(code);
    // this.props.getPersonality(code);
    this.setState({ finished: true });
  };
  onSubmit = e => {
    e.preventDefault();
    this.props.getTest();
    this.setState({ loading: true });
  };

  // onChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  onChange = (option, type) => e => {
    console.log(option);
    console.log(type);
    if (option === null && type === null) {
      this.setState({ [e.target.name]: e.target.value });
    } else {
      this.setState({
        choice: option.option_value,
        type,
        weight: option.weight
      });
    }
  };

  render() {
    return (
      <div className="dashboard">
        {/* <Nav active="personality" /> */}
        {/* {this.state.loading ? (
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
        ) : ( */}
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1>Dashboard</h1>
                <h1>Personality</h1>
                <div className="row">
                  <div className="col-md-12">
                    {!this.state.test && (
                      <Holland
                        onSubmit={this.onSubmit}
                        descipline={this.state.descipline}
                        onChange={this.onChange}
                        loading={this.state.loading}
                        questions={this.state.questions}
                      />
                    )}
                    {this.state.questions.length && (
                      <React.Fragment>
                        <div className="row">
                          <div className="mt-3 col-md-12 ml-5">
                            <Link
                              to="/personality"
                              className="btn btn-primary ml-auto"
                            >
                              Back
                            </Link>
                          </div>
                        </div>
                        <Questions
                          onChange={this.onChange}
                          question={this.state.questions[this.state.index]}
                          finished={this.state.finished}
                          choice={this.state.choice}
                        />
                        {!this.state.finished && (
                          <Button
                            index={this.state.index}
                            lastIndex={this.state.lastIndex}
                            questions={this.state.questions}
                            next={this.next}
                            previous={this.previous}
                            finish={this.finish}
                          />
                        )}
                      </React.Fragment>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* )} */}
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
