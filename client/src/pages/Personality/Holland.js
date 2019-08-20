import React from "react";
import "./Holland.css";
import { PushSpinner } from "react-spinners-kit";
import { Link } from "react-router-dom";

export default function Holland(props) {
  return (
    <div className="container">
      <div className="container">
        <form
          onSubmit={props.onSubmit}
          style={{ marginTop: "10%", marginBottom: "10%" }}
          className=""
        >
          <div className="row">
            <div className="col-sm-6 col-md-6 offset-3 ">
              <h5 className="mb-3 text-center">Select Descipline</h5>
              <div className="form-style-w3ls">
                <div className="input-group mb-3">
                  <div className="input-group mb-3">
                    <select
                      onChange={props.onChange(null, null)}
                      name="descipline"
                      className="custom-select"
                      id="inputGroupSelect04"
                      value={props.descipline}
                    >
                      <option defaultValue>Choose...</option>
                      <option value="Computer Science">Computer Science</option>
                      <option value="Engineering">Engineering</option>
                    </select>
                  </div>
                </div>
                <button disabled={props.loading} type="submit" className="btn">
                  {props.loading ? "Loading..." : "Submit"}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
