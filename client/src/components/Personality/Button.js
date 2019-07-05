import React from "react";
import propTypes from "prop-types";

export default function Button({
  index,
  lastIndex,
  questions,
  next,
  previous,
  finish
}) {
  return (
    <div style={{ marginBottom: "6%" }} className="row mt-0">
      <div className="col-md-4 offset-4">
        {questions.length ? (
          <div className="row">
            <div className="col-md-4">
              {index > 0 && (
                <button
                  onClick={previous}
                  className="btn btn-primary float-left"
                >
                  Previous
                </button>
              )}
            </div>
            <div className="col-md-4">
              <p className="text-muted text-center">
                {`${index + 1}/${questions.length}`}{" "}
              </p>
            </div>
            <div className="col-md-4 clear-fix">
              <button
                onClick={index === lastIndex ? finish : next}
                className="btn btn-primary float-right"
              >
                {index === lastIndex ? "Submit" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

Button.propTypes = {
  index: propTypes.number.isRequired,
  lastIndex: propTypes.number.isRequired,
  questions: propTypes.array.isRequired,
  next: propTypes.func.isRequired,
  previous: propTypes.func.isRequired,
  finish: propTypes.func.isRequired
};
