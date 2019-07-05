import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { PushSpinner } from "react-spinners-kit";

import Card from "../../common/Card";
import "./Question.css";

let regex = /[A-Z]/g;

const split = data => {
  let found = data.match(regex);
  if (found) {
    let character = data.split(found[0]);
    return character.join(" " + found[0].toLowerCase());
  } else {
    return data;
  }
};

const Questions = ({
  question,
  onChange,
  finished,
  choice,
  code,
  realistic,
  artistic,
  social,
  enterprising,
  convention,
  investigative
}) => {
  const Test = () =>
    question ? (
      <div className="col-md-8 offset-2">
        <div className=" pt-3">
          <form action="" className="form-contro">
            <h3 className="text-muted text-center">{question.question}</h3>
            {question.question_option.map(option => {
              return (
                <div key={option._id} className="option">
                  <label
                    htmlFor={option.option_value}
                    className="text-capitalize form-check-label"
                  >
                    <input
                      type="radio"
                      name={option.option_value}
                      id={option.option_value}
                      onChange={onChange(option, question.type)}
                      checked={choice === option.option_value}
                      value={option.option_value}
                      className="p-5"
                      style={{ marginRight: "1rem" }}
                    />
                    {split(option.option_value)}
                  </label>
                </div>
              );
            })}
          </form>
        </div>
      </div>
    ) : (
      <div className="center-spinner">
        <PushSpinner size={50} color="#686769" loading={!question} />
      </div>
    );
  const Finished = () => (
    <div className="col-md-10 offset-1">
      <div style={{ paddingBottom: "15%" }} className="row">
        <div className="col-md-6 offset-3">
          <div className="pt-5 pl-3">
            <h3 className="text-muted text-center">
              Your CAS RIASEC TEST Result
            </h3>
            <Card
              code={code}
              realistic={realistic}
              artistic={artistic}
              social={social}
              enterprising={enterprising}
              convention={convention}
              investigative={investigative}
            />
          </div>
          <div className="text-center">
            <Link to="/career" className="btn btn-primary">
              Career Path
            </Link>
            <p className=" text-danger">Click on the button to continue</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6" />
        <div style={{ float: "right" }} className="col-md-6" />
      </div>
    </div>
  );
  return <div className="row mt-5">{finished ? Finished() : Test()}</div>;
};

Questions.propTypes = {
  question: propTypes.object,
  onChange: propTypes.func.isRequired,
  finished: propTypes.bool.isRequired,
  choice: propTypes.string.isRequired,
  code: propTypes.string.isRequired,
  realistic: propTypes.number.isRequired,
  artistic: propTypes.number.isRequired,
  social: propTypes.number.isRequired,
  enterprising: propTypes.number.isRequired,
  convention: propTypes.number.isRequired,
  investigative: propTypes.number.isRequired
};

export default Questions;
