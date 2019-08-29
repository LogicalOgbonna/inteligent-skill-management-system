import React from "react";
import Nav from "../../components/Nav/Nav";
import SideBar from "../../components/SideBar/SideBar";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";
import { getProfile } from "../../actions/profile";

class Profile extends React.Component {
  componentDidMount() {
    this.props.getProfile();
  }
  render() {
    console.log(this.props.profile);
    return (
      <div className="dashboard">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="profile" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard">
                <h1>Dashboard</h1>
                <h2>Profile</h2>
                <div className="row">
                  <div className="col-md-4" />
                  <div className="col-md-4">
                    <img
                      src={this.props.profile && this.props.profile.avatar}
                      alt={this.props.profile && this.props.profile.name}
                      sizes="240"
                      srcSet=""
                      className="rounded-circle ml-auto mr-auto"
                    />
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        value={this.props.profile && this.props.profile.name}
                        id="name"
                        type="text"
                        className="form-control"
                        readOnly={true}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        value={this.props.profile && this.props.profile.email}
                        id="email"
                        type="text"
                        className="form-control"
                        readOnly={true}
                      />
                    </div>
                  </div>
                  <div className="col-md-4" />
                </div>
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
  profile: state.user.profile
});
export default connect(
  mapStateToProps,
  { getProfile }
)(Profile);
