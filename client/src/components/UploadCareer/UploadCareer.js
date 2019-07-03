import React, { Component } from "react";
import readXlsxFile from "read-excel-file";
import propType from "prop-types";
import { connect } from "react-redux";

import { uploadCareers } from "../../actions/upload";

import Nav from "../Nav";
import Footer from "../Footer";

class UploadCareer extends Component {
  state = {
    careers: {},
    careersAdded: false
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.career) {
      this.setState({ careersAdded: nextProps.career, loading: false });
    }
  }
  onChange = e => {
    const file = e.target.files[0];
    let careers = {};
    careers.career = [];
    readXlsxFile(file).then(row => {
      for (let i = 1; i < row.length; i++) {
        careers.career.push({
          name: row[i][0],
          code: row[i][1]
        });
      }
      this.setState({ careers });
    });
  };
  onSubmit = e => {
    e.preventDefault();
    if (Object.keys(this.state.careers).length > 0) {
      this.setState({ loading: true });
      this.props.uploadCareers(this.state.careers);
    }
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
