import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import propType from "prop-types";
import { connect } from "react-redux";

import { uploadQuestions } from "../../actions/upload";

import Nav from "../Nav";
import Footer from "../Footer";

class UploadPersonalityTest extends Component {
  state = {
    questions: [],
    questionAdded: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.question) {
      this.setState({ questionAdded: nextProps.question, loading: false });
    }
  }
  onChange = e => {
    const file = e.target.files[0];
    let questions = [];
    readXlsxFile(file).then(row => {
      for (let i = 1; i < row.length; i++) {
        questions = [
          ...questions,
          {
            question: row[i][0],
            type: row[i][1],
            question_option: [
              {
                option_value: "disagree",
                weight: -2
              },
              {
                option_value: "slightlyDisagree",
                weight: -1
              },
              {
                option_value: "neutral",
                weight: 0
              },
              {
                option_value: "slightlyAgree",
                weight: 1
              },
              {
                option_value: "agree",
                weight: 2
              }
            ]
          }
        ];
      }
      this.setState({ questions });
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.questions.length > 0) {
      this.setState({ loading: true });
      this.props.uploadQuestions(this.state.questions);
    }
  };

  clearAddedQuestion = () => {
    setTimeout(this.setState({ questionAdded: false }), 1000);
  };
  render() {
    return (
      <React.Fragment>
        <Nav active="personality" />
        <div className="container">
          <form
            onSubmit={this.onSubmit}
            style={{ marginTop: "10%", marginBottom: "10%" }}
            className=""
          >
            {this.state.questionAdded && (
              <div className="row">
                <div className="col-md-6 offset-3">
                  <div className="alert alert-success alert-dismissible">
                    <a
                      href="#"
                      className="close"
                      data-dismiss="alert"
                      aria-label="close"
                    >
                      &times;
                    </a>
                    <strong>Success!</strong> Questions Uploaded Successfully.
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-sm-4 offset-4 ">
                <h5 className="mb-3 text-center">Upload Test Questions</h5>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    name="excel"
                    id="excel"
                    aria-describedby="basic-addon2"
                    onChange={this.onChange}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text" id="basic-addon2">
                      <button className="btn btn-primary">Upload</button>
                    </span>
                  </div>
                </div>
                <div className="form-style-w3ls">
                  <button
                    disabled={this.state.loading}
                    type="submit"
                    className="btn"
                  >
                    {this.state.loading ? "Loading..." : "Upload"}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  question: !!state.uploads.questions
});
UploadPersonalityTest.propType = {
  uploadQuestions: propType.func.isRequired,
  question: propType.bool
};

export default connect(
  mapStateToProps,
  { uploadQuestions }
)(UploadPersonalityTest);
