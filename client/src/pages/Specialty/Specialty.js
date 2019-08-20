import React, { Component } from "react";

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";

class Specialty extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="specialty" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1> Specialty</h1>
                <h1> Specialty</h1>
              </div>
            </div>
          </div>
        </div>

        <Footer isAuthenticated={true} />
      </div>
    );
  }
}

export default Specialty;
