import React from "react";
import "./Card.css";
import "bootstrap";
export default function Card({ spel }) {
  return (
    <div className="col-sm-4">
      <div className="card card-default">
        <div className="card-header">{spel.name}</div>
        <a href={`/specialty/${spel._id}`} className="card-link">
          <div className="card-body ">
            {/* <div className="card-left">
      <img src="http://placeimg.com/640/320/nature/grayscale" className="img-responsive" />
    </div> */}
            <div className="card-right" style={{ marginBottom: "4%" }}>
              {/* <h4>Heading</h4> */}
              <p>{spel.description}</p>
            </div>
          </div>
        </a>

        <div className="card-footer">Required Skills: {spel.skills}</div>
      </div>
    </div>
  );
}
