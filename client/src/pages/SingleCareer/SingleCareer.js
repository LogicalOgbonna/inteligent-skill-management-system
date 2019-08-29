import React, { Component } from "react";
import "../../codegig_html/css/style.css";
import { connect } from "react-redux";
import { getDesciplines } from "../../actions/upload";
import CareerCard from "../../components/Card/CareerCard";

class SingleCareer extends Component {
  componentDidMount() {
    this.props.getDesciplines();
  }
  render() {
    const search = this.props.match.params.id.replace("_", " ");
    console.log(search);
    let result = [];
    if (this.props.desciplines && this.props.desciplines.length) {
      for (let i = 0; i < this.props.desciplines.length; i++) {
        for (
          let j = 0;
          j < this.props.desciplines[i].descipline.fields.length;
          j++
        ) {
          console.log(this.props.desciplines[i].descipline.fields[j].name);
          if (this.props.desciplines[i].descipline.fields[j].name === search) {
            result.push(this.props.desciplines[i].descipline.fields[j]);
          }
        }
      }
    }
    console.log(result);
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
              <div className="col-md-10 col-sm-11 display-table-cell v-align">
                <div className="user-dashboard mt-5">
                  <div className="row">
                    <div className="col-md-6">
                      {result.length ? (
                        result.map(card => (
                          <div key={card._id}>
                            <h1
                              style={{ fontWeight: "700" }}
                              className="text-bold"
                            >
                              {card.name}
                            </h1>
                            {/* <h3 style={{ fontWeight: "600" }}>{field.name}</h3> */}
                            <hr style={{ color: "#0e1a35" }} />
                            <p>{card.description}</p>
                            <hr style={{ color: "#0e1a35" }} />
                            <div className="row">
                              <div className="col-md-6">
                                <p>Required Skills: {card.skills}</p>
                              </div>
                              <div className="col-md-6">
                                <a
                                  style={{ float: "right" }}
                                  target="_blank"
                                  href={card.link}
                                  className="btn btn btn-reverse"
                                >
                                  {card.link}
                                </a>
                              </div>
                            </div>
                            <hr
                              style={{
                                borderTopColor: "#0e1a35",
                                marginBottom: "10%"
                              }}
                            />
                          </div>
                        ))
                      ) : (
                        <div className="container" style={{ marginTop: "20%" }}>
                          <div className="jumbotron">
                            <h1 className="text-center">No Result Found</h1>
                            <a
                              href="/login"
                              className="btn btn-reverse text-center"
                              style={{ marginLeft: "10%" }}
                            >
                              Resgiter To Take Test
                            </a>
                          </div>
                        </div>
                      )}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  desciplines: state.uploads.allDescipline
});

export default connect(
  mapStateToProps,
  { getDesciplines }
)(SingleCareer);
