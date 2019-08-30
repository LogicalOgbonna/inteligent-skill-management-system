import React, { Component } from "react";
import { connect } from "react-redux";

import { userDescipline } from "../../actions/users";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import Card from "../../components/Card/Card";

class SingleSpecialty extends Component {
  componentDidMount() {
    // console.log(this.props.user);
    this.props.userDescipline(this.props.user.descipline);
  }
  render() {
    const id = this.props.match.params.id;
    // prettier-ignore
    const descipline = this.props.desciplines.length > 0 && this.props.desciplines[0].fields.filter(desc => desc._id === id);

    return (
      <div className="dashboard">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="specialty" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1> Specialty</h1>
                <h1>
                  {" "}
                  {this.props.desciplines.length &&
                    this.props.desciplines[0].name}
                </h1>

                {descipline.length && (
                  <div className="row">
                    {/* <div className="col-md-2" /> */}
                    <div className="col-md-6">
                      <h1>{descipline[0].name}</h1>
                      <hr style={{ color: "#0e1a35" }} />
                      <p>{descipline[0].description}</p>
                      <hr style={{ color: "#0e1a35" }} />
                      <div className="row">
                        <div className="col-md-6">
                          <p>Required Skills: {descipline[0].skills}</p>
                        </div>
                        <div className="col-md-6">
                          <a
                            style={{ float: "right" }}
                            href={descipline[0].link}
                            target="_blank"
                            className="btn btn btn-reverse"
                          >
                            {descipline[0].link}
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <section id="gigs" className="container">
                        <h1>Jobs</h1>
                        <hr style={{ color: "#0e1a35" }} />

                        <div className="gig">
                          <h3>Looking for a react developer</h3>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Vero aspernatur tempora nisi quibusdam
                            doloribus adipisci cumque quidem perferendis. Iusto,
                            natus!
                          </p>
                          <ul>
                            <li>Budget: $10,000</li>
                            <li>
                              <a href="#" className="btn btn-reverse">
                                Apply Now
                              </a>
                            </li>
                          </ul>
                          <div className="tech">
                            <small>
                              Technologies Needed:{" "}
                              <span>react, redux, javascript</span>
                            </small>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                )}
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
  user: state.user.user,
  desciplines: state.client.descipline
});

export default connect(
  mapStateToProps,
  { userDescipline }
)(SingleSpecialty);
