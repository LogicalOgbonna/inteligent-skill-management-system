import React, { Component } from "react";
import propTypes from "prop-types";
import { connect } from "react-redux";
import { PushSpinner } from "react-spinners-kit";
import readXlsxFile from "read-excel-file";

import { getPersonality } from "../../actions/test";
import { addSubject } from "../../actions/profile";

import { ResultTable, WorkTable } from "./Table";
import Nav from "../Nav";
import Footer from "../Footer";
import "./CareerPath.css";
// import Card from "../ServiceCard";
class Career extends Component {
  state = {
    student: {},
    area: "",
    career: [],
    loading: false,
    table: false,
    riasec: []
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.career) {
      this.setState({ career: nextProps.career, loading: false, table: true });
    }
    if (nextProps.riasec.length) {
      this.setState({ riasec: nextProps.riasec });
    }
  }
  onChange = e => {
    if (e.target.name === "area") {
      return this.setState({ area: e.target.value });
    }
    const file = e.target.files[0];
    let student = {};
    let subjects = [];
    readXlsxFile(file).then(row => {
      for (let i = 1; i < row.length; i++) {
        subjects = [
          ...subjects,
          {
            name: row[i][0].toLowerCase(),
            grade: row[i][1].toLowerCase()
          }
        ];
      }
      student.subjects = subjects;
      this.setState({ student });
    });
  };

  validate = data => {
    const errors = {};
    if (!data.area) errors.area = "Can't be blank";
    if (Object.keys(data.student) === 0)
      errors.student = "Please Select a file";

    return errors;
  };
  onSubmit = e => {
    e.preventDefault();
    const errors = this.validate(this.state);
    this.setState({ errors });
    const { student, area } = this.state;
    student.area = area;
    if (Object.keys(errors).length === 0) {
      this.props.addSubject(student);
      this.props.getPersonality(JSON.parse(localStorage.code));
      this.setState({ loading: true });
    }
  };
  render() {
    return (
      <div>
        <Nav active="career" />
        {this.state.loading ? (
          <div className="center-spinner">
            <div
              style={{ marginTop: "10%", marginBottom: "10%" }}
              className="row"
            >
              <div className="col-md-4 offset-4">
                <PushSpinner
                  size={50}
                  color="#686769"
                  loading={this.state.loading}
                />
              </div>
            </div>
          </div>
        ) : this.state.table ? (
          <div style={{ marginTop: "5%", marginBottom: "10%" }} className="row">
            <div className="col-md-8 offset-2">
              <div className="row">
                <div className="banner-career banner6">
                  <div className="slogan">Courses you can study</div>
                  <h1> YOUR RESULT</h1>
                </div>
                <div className="col-md-6 mt-3">
                  <ResultTable
                    name="Your Result"
                    subjects={this.state.student.subjects}
                    withGrade={true}
                  />
                </div>
                <div className="col-md-6 mt-3">
                  <ResultTable
                    name="Passed Subjects (C is the least)"
                    subjects={this.state.career.subjectsPassed}
                    withGrade={false}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className=" mt-3">
                    {/* <label htmlFor="Result_given"> */}
                    <WorkTable
                      name="Course you can study"
                      data={this.state.career.data}
                      notRiasec={true}
                    />
                  </div>
                </div>
              </div>

              {/* Test RAISEC */}
              <div className="row">
                <div className="banner-career banner2">
                  <div className="slogan">Careers based on the test</div>
                  <h1>RAISEC TEST</h1>
                </div>

                <div className="col-md-12">
                  <div className=" mt-3">
                    {/* <label htmlFor="Result_given"> */}
                    <WorkTable
                      name="Jobs"
                      data={this.state.riasec}
                      notRiasec={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form
            onSubmit={this.onSubmit}
            style={{ marginTop: "10%", marginBottom: "10%" }}
            className=""
          >
            <div className="row">
              <div className="col-sm-4 offset-4 ">
                <h5 className="mb-3 text-center">Upload Your Weac Result</h5>
                <div className="input-group mb-3">
                  <div className="input-group mb-3">
                    <select
                      onChange={this.onChange}
                      name="area"
                      className="custom-select"
                      id="inputGroupSelect04"
                      value={this.state.area}
                    >
                      <option defaultValue>Choose...</option>
                      <option value="science">Science</option>
                      <option value="art">Art</option>
                    </select>
                  </div>
                </div>
                <div className="form-style-w3ls">
                  <button
                    disabled={this.state.loading}
                    type="submit"
                    className="btn"
                  >
                    {" "}
                    Trace Your Path{" "}
                  </button>
                </div>
                <h5 className="mb-3 text-center text-muted mt-1">
                  YOUR INFORMATION IN SECURE WITH US
                </h5>
              </div>
            </div>
          </form>
        )}
        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

Career.propTypes = {
  isAuthenticated: propTypes.bool.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated,
  career: state.user.career,
  riasec: state.user.riasec
});

export default connect(
  mapStateToProps,
  { addSubject, getPersonality }
)(Career);
