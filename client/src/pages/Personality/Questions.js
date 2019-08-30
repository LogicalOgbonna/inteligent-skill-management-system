import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { PushSpinner } from "react-spinners-kit";

import Card from "../../components/Card/Card";
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
  desciplines,
  code
}) => {
  const Test = () =>
    question ? (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2" />
          <div className="col-md-8">
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
          <div className="col-md-2" />
        </div>
      </React.Fragment>
    ) : (
      <div className="center-spinner">
        <PushSpinner size={50} color="#686769" loading={!question} />
      </div>
    );
  const Finished = () => {
    let search = [];
    const code1 = code.split(",")[0];
    const code2 = code.split(",")[1];
    console.log(desciplines);
    for (let i = 0; i < desciplines.length; i++) {
      console.log(desciplines[i].fields);
      desciplines[i].fields.map(field => {
        if (field.name === code1 || field.name === code2) {
          search.push(field);
        }
      });
    }

    return (
      <div className="row">
        <div style={{ paddingBottom: "15%" }} className="row">
          <div className="col-md-12">
            <div className="pt-5 pl-3">
              {search.length > 0 && (
                <h1 className="text-muted text-center">Your Result</h1>
              )}
            </div>
            {search.length ? (
              search.map(spel => <Card key={spel._id} spel={spel} />)
            ) : (
              <h1 className="text-muted text-center">No Skill Match</h1>
            )}
          </div>
        </div>

        <div className="row">
          <div className="col-md-6" />
          <div style={{ float: "right" }} className="col-md-6" />
        </div>
      </div>
    );
  };
  return <div className="row mt-5">{finished ? Finished() : Test()}</div>;
};

Questions.propTypes = {
  question: propTypes.object,
  onChange: propTypes.func.isRequired,
  finished: propTypes.bool.isRequired,
  choice: propTypes.string.isRequired
};

export default Questions;
