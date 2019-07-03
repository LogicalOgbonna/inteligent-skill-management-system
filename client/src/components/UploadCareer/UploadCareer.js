import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import propType from "prop-types";
import { connect } from "react-redux";

import { uploadCareers } from "../../actions/upload";

import Nav from "../Nav";
import Footer from "../Footer";
import "./UploadCareer.css";

class UploadCareer extends Component {
  state = {
    careers: {},
    descipline: "",
    name: "",
    skills: "",
    description: "",
    link: "",
    fields: [],
    careersAdded: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.career) {
      this.setState({ careersAdded: nextProps.career, loading: false });
    }
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.fields);
    const descipline = {
      name: this.state.descipline,
      fields: this.state.fields
    };
    // if (Object.keys(this.state.careers).length > 0) {
    //   this.setState({ loading: true });
    //   this.props.uploadCareers(this.state.careers);
    // }
    console.log(descipline);
  };

  addDescipline = e => {
    let fields = this.state.fields;
    fields.push({
      name: this.state.name,
      skills: this.state.skills,
      link: this.state.link,
      description: this.state.description
    });

    this.setState({ name: "", skills: "", link: "", description: "", fields });
    e.preventDefault();
  };

  clearAddedQuestion = () => {
    setTimeout(this.setState({ careersAdded: false }), 1000);
  };
  render() {
    return (
      <React.Fragment>
        <Nav active="career" />
        <div className="container">
          <form
            onSubmit={this.onSubmit}
            style={{ marginTop: "10%", marginBottom: "10%" }}
            className=""
          >
            {this.state.careersAdded && (
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
                    <strong>Success!</strong> Careers Uploaded Successfully.
                  </div>
                </div>
              </div>
            )}
            <div className="row">
              <div className="col-sm-4 offset-4 ">
                <h5 className="mb-3 text-center">Upload Careers</h5>
                <div className="form-style-w3ls">
                  <div className="input-group mb-3">
                    <div className="input-group mb-3">
                      <select
                        onChange={this.onChange}
                        name="descipline"
                        className="custom-select"
                        id="inputGroupSelect04"
                        value={this.state.descipline}
                      >
                        <option defaultValue>Choose...</option>
                        <option value="computerScience">
                          Computer Science
                        </option>
                        <option value="engineering">Engineering</option>
                      </select>
                    </div>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Field Name"
                      aria-label="Field Name"
                      name="name"
                      value={this.state.name}
                      id="name"
                      aria-describedby="basic-addon2"
                      onChange={this.onChange}
                    />

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Skills Needed"
                      aria-label="Skills Needed"
                      name="skills"
                      value={this.state.skills}
                      id="skills"
                      aria-describedby="basic-addon2"
                      onChange={this.onChange}
                    />

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Resource Link"
                      aria-label="Resource Link"
                      name="link"
                      id="link"
                      value={this.state.link}
                      aria-describedby="basic-addon2"
                      onChange={this.onChange}
                    />

                    <div className="form-group">
                      <label htmlFor="description">Description *</label>
                      <textarea
                        onChange={this.onChange}
                        placeholder="What the student need to know..."
                        className="form-control"
                        value={this.state.description}
                        name="description"
                        id="description"
                        rows="3"
                        cols="40"
                      />
                    </div>

                    <div className="ml-auto">
                      {/* <div className="col-sm-4 pl-auto" />
                      <div className="col-sm-4 pl-auto" /> */}

                      {/* <div
                        style={{ float: "left" }}
                        className="col-md-12 pl-auto"
                      > */}
                      <button
                        type="button"
                        style={{
                          width: "30px",
                          height: "30px",
                          padding: "6px 0px",
                          borderRadius: "15px",
                          textAlign: "center",
                          fontSize: "12px",
                          lineHeight: 1.42857,
                          float: "left"
                        }}
                        onClick={this.addDescipline}
                        className="btn btn-default btn-circle"
                      >
                        <i className="fa fa-plus" />
                      </button>
                      {/* </div> */}
                    </div>
                  </div>
                  <button
                    disabled={this.state.loading}
                    type="submit"
                    className="btn"
                  >
                    {this.state.loading ? "Loading..." : "Submit"}
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
  career: !!state.uploads.careers
});
UploadCareer.propType = {
  uploadCareers: propType.func.isRequired,
  career: propType.bool
};

export default connect(
  mapStateToProps,
  { uploadCareers }
)(UploadCareer);
