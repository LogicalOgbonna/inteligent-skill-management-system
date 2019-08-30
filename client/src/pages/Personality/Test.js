import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { getTest, getPersonality } from "../../actions/test";
import { userDescipline } from "../../actions/users";

import Questions from "./Questions";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
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
    dataScience: 0,
    ux: 0,
    frontEnd: 0,
    networkAnalyst: 0,
    systemAnalyst: 0,
    backEnd: 0,
    database: 0,
    quality: 0,
    networkEngineer: 0,
    graphics: 0,
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
      dataScience,
      ux,
      frontEnd,
      networkAnalyst,
      systemAnalyst,
      backEnd,
      database,
      quality,
      networkEngineer,
      type,
      weight,
      graphics
    } = this.state;
    console.log(type);
    type === "Data Science" &&
      this.setState({
        ...this.state,
        dataScience: dataScience + weight
      });

    type === "Front End Engineer" &&
      this.setState({
        ...this.state,
        frontEnd: frontEnd + weight
      });

    type === "User Experience" &&
      this.setState({
        ...this.state,
        ux: ux + weight
      });

    type === "Network Analyst" &&
      this.setState({
        ...this.state,
        networkAnalyst: networkAnalyst + weight
      });

    type === "System Analyst" &&
      this.setState({
        ...this.state,
        systemAnalyst: systemAnalyst + weight
      });

    type === "Back End Engineer" &&
      this.setState({
        ...this.state,
        backEnd: backEnd + weight
      });

    type === "Database Administrator" &&
      this.setState({
        ...this.state,
        database: database + weight
      });
    type === "Quality Assurance Manager" &&
      this.setState({
        ...this.state,
        quality: quality + weight
      });
    type === "Network Engineer" &&
      this.setState({
        ...this.state,
        networkEngineer: networkEngineer + weight
      });
    type === "Motion Graphics Designer" &&
      this.setState({
        ...this.state,
        graphics: graphics + weight
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
      dataScience,
      ux,
      frontEnd,
      networkAnalyst,
      systemAnalyst,
      backEnd,
      database,
      quality,
      networkEngineer,
      type,
      weight,
      graphics
    } = this.state;
    type === "Data Science" &&
      this.setState({
        ...this.state,
        dataScience: dataScience - weight
      });

    type === "Front End Engineer" &&
      this.setState({
        ...this.state,
        frontEnd: frontEnd - weight
      });

    type === "User Experience" &&
      this.setState({
        ...this.state,
        ux: ux - weight
      });

    type === "Network Analyst" &&
      this.setState({
        ...this.state,
        networkAnalyst: networkAnalyst - weight
      });

    type === "System Analyst" &&
      this.setState({
        ...this.state,
        systemAnalyst: systemAnalyst - weight
      });

    type === "Back End Engineer" &&
      this.setState({
        ...this.state,
        backEnd: backEnd - weight
      });
    type === "Database Administrator" &&
      this.setState({
        ...this.state,
        database: database - weight
      });
    type === "Quality Assurance Manager" &&
      this.setState({
        ...this.state,
        quality: quality - weight
      });
    type === "Network Engineer" &&
      this.setState({
        ...this.state,
        networkEngineer: networkEngineer - weight
      });
    type === "Motion Graphics Designer" &&
      this.setState({
        ...this.state,
        graphics: graphics - weight
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
    array.push({ value: this.state.dataScience, name: "Data Science" });
    array.push({ value: this.state.ux, name: "User Experience" });
    array.push({ value: this.state.frontEnd, name: "Front End Engineer" });
    array.push({ value: this.state.networkAnalyst, name: "Network Analyst" });
    array.push({ value: this.state.systemAnalyst, name: "System Analyst" });
    array.push({ value: this.state.backEnd, name: "Back End Engineer" });
    array.push({ value: this.state.database, name: "Database Administrator" });
    array.push({
      value: this.state.quality,
      name: "Quality Assurance Manager"
    });
    array.push({ value: this.state.networkEngineer, name: "Network Engineer" });
    array.push({
      value: this.state.graphics,
      name: "Motion Graphics Designer"
    });

    const sortedNumbers = array.sort(this.sortNumbers);
    const code = `${sortedNumbers[sortedNumbers.length - 1].name}, ${sortedNumbers[sortedNumbers.length - 2].name}`;
    // this.props.getPersonality(code);
    this.setState({ finished: true, code });
    this.props.userDescipline(this.props.user.descipline);
  };
  render() {
    return (
      <div className="dashboard">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="test" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1>Dashboard</h1>
                <h1>Test</h1>
                <div className="container-fluid">
                  <div className="row" />
                  <Questions
                    onChange={this.onChange}
                    question={this.state.questions[this.state.index]}
                    finished={this.state.finished}
                    choice={this.state.choice}
                    code={this.state.code}
                    desciplines={this.props.desciplines}
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
              </div>
            </div>
          </div>
        </div>
        {/* <Nav active="personality" /> */}

        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tests: state.user.tests,
  user: state.user.user,
  desciplines: state.client.descipline
});

export default connect(
  mapStateToProps,
  { getTest, getPersonality, userDescipline }
)(Test);
