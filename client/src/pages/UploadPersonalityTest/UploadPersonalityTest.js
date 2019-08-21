import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import propType from "prop-types";
import { connect } from "react-redux";

import { uploadQuestions } from "../../actions/upload";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";

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
                option_value: "1",
                weight: -2
              },
              {
                option_value: "2",
                weight: -1
              },
              {
                option_value: "3",
                weight: 0
              },
              {
                option_value: "4",
                weight: 1
              },
              {
                option_value: "5",
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
      <div className="dashboard">
        {/* <Nav active="personality" /> */}
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="test" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1>Upload Test Questions</h1>
                <h1>Upload Test Questions</h1>
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
                          <strong>Success!</strong> Questions Uploaded
                          Successfully.
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-sm-4 offset-4 ">
                      {/* <h5 className="mb-3 text-center">
                        
                      </h5> */}
                      {/* <div className="input-group mb-3">
                        
                      </div> */}
                      <div
                        className="form-style-w3ls"
                        style={{ width: "100%", marginBottom: "4%" }}
                      >
                        <div className="input-group mb-3">
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
                              // style={{ width: "100%" }}
                            />
                          </div>
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
            </div>
          </div>
        </div>
        <Footer isAuthenticated={true} />
      </div>
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
