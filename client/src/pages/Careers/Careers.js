import React, { Component } from "react";
import "../../codegig_html/css/style.css";
import { connect } from "react-redux";
import { getDesciplines } from "../../actions/upload";
import { getJobs } from "../../actions/jobs";
import CareerCard from "../../components/Card/CareerCard";
import JobsCard from "../../components/Card/JobsCard";

class Careers extends Component {
  componentDidMount() {
    this.props.getDesciplines();
    this.props.getJobs();
  }
  render() {
    return (
      <div>
        <header className="inner">
          <h2>
            <a href="/">
              <i className="fas fa-code" />
              Career
            </a>
          </h2>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/careers">All Gigs</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </nav>
        </header>
        <div className="dashboard">
          <div className="container-fluid display-table">
            <div className="row display-table-row">
              {/* <SideBar page="specialty" /> */}
              <div className="col-md-10 col-sm-11 display-table-cell v-align">
                {/* <Nav /> */}
                <div className="user-dashboard mt-5">
                  {/* {descipline && ( */}
                  <div className="row">
                    {/* <div className="col-md-2" /> */}
                    <div className="col-md-6">
                      {this.props.desciplines &&
                        this.props.desciplines.map(card => (
                          <CareerCard key={card._id} card={card} />
                        ))}
                    </div>
                    <div className="col-md-6">
                      <section id="gigs" className="container">
                        <h1>Jobs</h1>
                        <hr style={{ color: "#0e1a35" }} />

                        <JobsCard />
                        <JobsCard />
                      </section>
                    </div>
                  </div>
                  {/* )} */}
                </div>
              </div>
            </div>
          </div>

          {/* <Footer isAuthenticated={true} /> */}
        </div>

        {/* <section id="gigs" className="container">
    <h1>All Gigs</h1>
    <div className="gig">
      <h3>Looking for a react developer</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur tempora nisi quibusdam doloribus
        adipisci cumque quidem perferendis. Iusto, natus!</p>
      <ul>
        <li>Budget: $10,000</li>
        <li><a href="#" className="btn btn-reverse">Apply Now</a></li>
      </ul>
      <div className="tech">
        <small>Technologies Needed: <span>react, redux, javascript</span></small>
      </div>
    </div>

    <div className="gig">
      <h3>Wordpress website needed</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur tempora nisi quibusdam doloribus
        adipisci cumque quidem perferendis. Iusto, natus!</p>
      <ul>
        <li>Budget: $2,000</li>
        <li><a href="#" className="btn btn-reverse">Apply Now</a></li>
      </ul>
      <div className="tech">
        <small>Technologies Needed: <span>wordpress, php, html, css</span></small>
      </div>
    </div>

    <div className="gig">
      <h3>Flutter mobile app</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aspernatur tempora nisi quibusdam doloribus
        adipisci cumque quidem perferendis. Iusto, natus!</p>
      <ul>
        <li>Budget: $5,000</li>
        <li><a href="#" className="btn btn-reverse">Apply Now</a></li>
      </ul>
      <div className="tech">
        <small>Technologies Needed: <span>flutter, javascript, android</span></small>
      </div>
    </div>
  </section> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  desciplines: state.uploads.allDescipline
});

export default connect(
  mapStateToProps,
  { getDesciplines, getJobs }
)(Careers);
