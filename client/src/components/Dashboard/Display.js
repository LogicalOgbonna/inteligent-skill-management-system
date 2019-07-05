import React from "react";

import Card from "../ServiceCard";

export default function Display({ admin }) {
  return (
    <React.Fragment>
      <div className="dashboard" id="home">
        <div className="layer">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 offset-3 banner-text-w3pvt">
                <h4 className="b-w3ltxt text-capitalize text-center">
                  {admin ? "Manage Questions and Careeres" : "Know Who You Are"}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!admin ? (
        <div className="row">
          <div className="col-md-10 offset-1">
            <Card dashboard={true} />
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-md-10 offset-1">
            <Card dashboard={true} admin={admin} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
