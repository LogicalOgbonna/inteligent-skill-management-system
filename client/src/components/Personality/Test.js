import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTest, getPersonality } from "../../actions/test";

import Questions from "./Questions";
import Nav from "../Nav";
import Footer from "../Footer";
import Button from "./Button";
class Test extends React.Component {
  state = {
    choice: "",
    type: "",
    weight: "",
    index: 0,
    lastIndex: 0,
    finished: false,
    answers: [],
    questions: [],
    realistic: 0,
    investigative: 0,
    artistic: 0,
    social: 0,
    enterprising: 0,
    convention: 0,
    code: ""
  };

  componentDidMount() {
    this.props.getTest();
  }

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
        lastIndex: question.length - 1
      });
    }
  }
  onChange = (option, type) => e => {
    this.setState({
      choice: option.option_value,
      type,
      weight: option.weight
    });
  };

  next = () => {
    const {
      realistic,
      investigative,
      artistic,
      social,
      enterprising,
      convention,
      type,
      weight
    } = this.state;
    type === "realistic" &&
      this.setState({
        ...this.state,
        realistic: realistic + weight
      });

    type === "artistic" &&
      this.setState({
        ...this.state,
        artistic: artistic + weight
      });

    type === "investigative" &&
      this.setState({
        ...this.state,
        investigative: investigative + weight
      });

    type === "social" &&
      this.setState({
        ...this.state,
        social: social + weight
      });

    type === "enterprising" &&
      this.setState({
        ...this.state,
        enterprising: enterprising + weight
      });

    type === "convention" &&
      this.setState({
        ...this.state,
        convention: convention + weight
      });

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
    const {
      realistic,
      investigative,
      artistic,
      social,
      enterprising,
      convention,
      type,
      weight
    } = this.state;
    type === "realistic" &&
      this.setState({
        ...this.state,
        realistic: realistic - weight
      });

    type === "artistic" &&
      this.setState({
        ...this.state,
        artistic: artistic - weight
      });

    type === "investigative" &&
      this.setState({
        ...this.state,
        investigative: investigative - weight
      });

    type === "social" &&
      this.setState({
        ...this.state,
        social: social - weight
      });

    type === "enterprising" &&
      this.setState({
        ...this.state,
        enterprising: enterprising - weight
      });

    type === "convention" &&
      this.setState({
        ...this.state,
        convention: convention - weight
      });
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
    const array = [];
    array.push({ value: this.state.realistic, name: "realistic" });
    array.push({ value: this.state.investigative, name: "investigative" });
    array.push({ value: this.state.artistic, name: "artistic" });
    array.push({ value: this.state.social, name: "social" });
    array.push({ value: this.state.enterprising, name: "enterprising" });
    array.push({ value: this.state.convention, name: "convention" });

    const sortedNumbers = array.sort(this.sortNumbers);
    const code = `${sortedNumbers[5].name
      .charAt(0)
      .toUpperCase()}${sortedNumbers[4].name
      .charAt(0)
      .toUpperCase()}${sortedNumbers[3].name.charAt(0).toUpperCase()}`;
    localStorage.code = JSON.stringify(code);
    this.props.getPersonality(code);
    this.setState({ finished: true, code });
  };
  render() {
    return (
      <React.Fragment>
        <Nav active="personality" />
        <div className="container-fluid">
          <div className="row">
            <div className="mt-3 col-md-12">
              <Link to="/personality" className="btn btn-primary ml-auto">
                Back
              </Link>
            </div>
          </div>
          <Questions
            onChange={this.onChange}
            question={this.state.questions[this.state.index]}
            finished={this.state.finished}
            choice={this.state.choice}
            code={this.state.code}
            realistic={this.state.realistic}
            artistic={this.state.artistic}
            social={this.state.social}
            enterprising={this.state.enterprising}
            convention={this.state.convention}
            investigative={this.state.investigative}
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
        </div>

        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  tests: state.user.tests
});

export default connect(
  mapStateToProps,
  { getTest, getPersonality }
)(Test);
