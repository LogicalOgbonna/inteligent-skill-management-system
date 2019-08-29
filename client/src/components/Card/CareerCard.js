import React from "react";

export default function CareerCard({ card }) {
  return (
    <div>
      <h1 style={{ fontWeight: "700" }} className="text-bold">
        {card.descipline.name}
      </h1>
      {card.descipline.fields.map(field => (
        <div key={field._id}>
          <h3 style={{ fontWeight: "600" }}>{field.name}</h3>
          <hr style={{ color: "#0e1a35" }} />
          <p>{field.description}</p>
          <hr style={{ color: "#0e1a35" }} />
          <div className="row">
            <div className="col-md-6">
              <p>Required Skills: {field.skills}</p>
            </div>
            <div className="col-md-6">
              <a
                style={{ float: "right" }}
                target="_blank"
                href={field.link}
                className="btn btn btn-reverse"
              >
                {field.link}
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
      ))}
    </div>
  );
}
