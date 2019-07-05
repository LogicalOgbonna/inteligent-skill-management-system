import React from "react";

import "./Services.css";
import Card from "./ServiceCard";

export default function Services() {
  return (
    <section className="services py-5" id="services">
      <div className="container">
        <h3 className="heading mb-5">Our Services</h3>
        <Card />
        <div className="position-image mb-5">
          <img src="images/services.png" alt="" className="img-fluid" />
        </div>
      </div>
    </section>
  );
}
