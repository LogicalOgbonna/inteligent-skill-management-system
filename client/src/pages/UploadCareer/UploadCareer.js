import React, { Component } from "react";
import propType from "prop-types";
import { connect } from "react-redux";
import validator from "validator";

import { uploadCareers, getDesciplines } from "../../actions/upload";
import { DesciplineTable } from "../../common/Table";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
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
    desciplineAdded: false,
    allDescipline: [],
    errors: {}
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.descipline) {
      this.setState({
        desciplineAdded: nextProps.descipline,
        loading: false
      });
      this.props.getDesciplines();
    }
    if (nextProps.allDescipline.length) {
      this.setState({ allDescipline: nextProps.allDescipline });
    }
  }
  componentDidMount() {
    this.props.getDesciplines();
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  validate = data => {
    const errors = {};
    if (!data.descipline) errors.descipline = "Can't be blank";
    if (!data.name) errors.name = "Can't be blank";
    if (!data.skills) errors.skills = "Can't be blank";
    if (!data.description) errors.description = "Can't be blank";
    if (!validator.isURL(data.link)) errors.link = "Invalid URL";
    if (!data.link) errors.link = "Can't be blank";
    return errors;
  };
  onSubmit = e => {
    e.preventDefault();
    const descipline = {
      name: this.state.descipline,
      fields: this.state.fields
    };
    this.setState({ loading: true });
    this.props.uploadCareers(descipline);
    this.setState({ fields: [] });
    // console.log(descipline);
  };

  addDescipline = e => {
    const errors = this.validate(this.state);
    this.setState({ errors });

    let fields = this.state.fields;
    if (Object.keys(errors).length === 0) {
      fields.push({
        name: this.state.name,
        skills: this.state.skills,
        link: this.state.link,
        description: this.state.description
      });

      this.setState({
        name: "",
        skills: "",
        link: "",
        description: "",
        fields
      });
    }
    e.preventDefault();
  };
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="career" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1> Upload Descipline</h1>
                <h1> Upload Descipline</h1>
                <form
                  onSubmit={this.onSubmit}
                  style={{ marginTop: "10%", marginBottom: "10%" }}
                  className=""
                >
                  {this.state.desciplineAdded && (
                    <div className="row">
                      <div className="col-md-6">
                        <div className="alert alert-success alert-dismissible">
                          <a
                            href="#"
                            className="close"
                            data-dismiss="alert"
                            aria-label="close"
                          >
                            &times;
                          </a>
                          <strong>Success!</strong> Descipline Uploaded
                          Successfully.
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="row">
                    <div className="col-sm-6 col-md-4 ">
                      {/* <h5 className="mb-3 text-center">Upload Descipline</h5> */}
                      <div className="form-style-w3ls">
                        <div className="input-group mb-3">
                          <div
                            style={{ width: "100%" }}
                            className="input-group mb-3"
                          >
                            <select
                              onChange={this.onChange}
                              name="descipline"
                              className="custom-select"
                              id="inputGroupSelect04"
                              value={this.state.descipline}
                            >
                              <option defaultValue>Choose...</option>
                              <option value="Computer Science">
                                Computer Science
                              </option>
                              <option value="Engineering">Engineering</option>
                            </select>
                          </div>
                          {this.state.errors.descipline && (
                            <span style={{ color: "red" }}>
                              {this.state.errors.descipline}
                            </span>
                          )}

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
                          {this.state.errors.name && (
                            <span style={{ color: "red" }}>
                              {this.state.errors.name}
                            </span>
                          )}

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
                          {this.state.errors.skills && (
                            <span style={{ color: "red" }}>
                              {this.state.errors.skills}
                            </span>
                          )}

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
                          {this.state.errors.link && (
                            <span style={{ color: "red" }}>
                              {this.state.errors.link}
                            </span>
                          )}

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
                              cols="70"
                            />
                            {this.state.errors.description && (
                              <span style={{ color: "red" }}>
                                {this.state.errors.description}
                              </span>
                            )}
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
                                float: "right",
                                marginTop: "2%",
                                marginBottom: "2%"
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
                    <div className="col-sm-6 col-md-8">
                      <h5 className="mb-3 text-center">View Descipline</h5>

                      <DesciplineTable desciplines={this.state.allDescipline} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* <Nav active="career" /> */}
        <Footer isAuthenticated={true} />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  descipline: state.uploads.descipline,
  allDescipline: state.uploads.allDescipline
});
UploadCareer.propType = {
  uploadCareers: propType.func.isRequired,
  career: propType.bool,
  allDescipline: propType.array
};

export default connect(
  mapStateToProps,
  { uploadCareers, getDesciplines }
)(UploadCareer);
