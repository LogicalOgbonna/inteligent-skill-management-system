import React, { Component } from "react";
import { connect } from 'react-redux';
import {  ProductCard } from "react-ui-cards";


import { userDescipline } from '../../actions/users';

import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import SideBar from "../../components/SideBar/SideBar";
import Card from "../../components/Card/Card"

class Specialty extends Component {


  componentDidMount() {
    console.log(this.props.user)
this.props.userDescipline(this.props.user.descipline)
  }
  render() {
    return (
      <div className="dashboard">
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <SideBar page="specialty" />
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <Nav />
              <div className="user-dashboard mt-5">
                <h1> Specialty</h1>
                <h1> {this.props.desciplines && this.props.desciplines[0].name}</h1>
          <div className="row">
{ this.props.desciplines && this.props.desciplines[0].fields.map(spel => <Card key={spel._id} spel={spel}/> )         }
          
                {/* <div className="col-md-4 mb-4">
                      <ProductCard
                        photos={[
                          "https://cdn2.iconfinder.com/data/icons/flaticons-stroke/16/minimize-1-512.png"
                          // "https://i.imgur.com/raPe27t.jpg",
                          // "https://i.imgur.com/IpEsYSH.jpg"
                        ]}
                        // price="$99"
                        productName="Kruskal"
                        description="Minimize your graph using Kruskal's Algorithm now."
                        buttonText="Minimize"
                        rating={3}
                        url="/kruskal"
                      />
                    </div> */}
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

const mapStateToProps = state=> ({
  user: state.user.user,
  desciplines: state.client.descipline
})

export default connect(mapStateToProps, {userDescipline})(Specialty);
