import React from "react";

export default function About({
  onSubmit,
  onChange,
  name,
  errors,
  school,
  year
}) {
  const styles = {
    color: "red",
    text: {
      textAlign: "center"
    }
  };
  return (
    <form onSubmit={onSubmit} className="form-control">
      <div className="row mt-5">
        <div className="col-md-4 offset-4">
          <h5 className="mb-3 text-center">Tell Us Abou You</h5>
          <div className="form-style-w3ls">
            <input
              placeholder="Your Name"
              name="name"
              type="text"
              required={true}
              value={name}
              onChange={onChange}
            />
            {errors.name && (
              <span style={styles} id="errors">
                {errors.name}
              </span>
            )}
            <input
              placeholder="Your School"
              name="school"
              type="text"
              required={true}
              value={school}
              onChange={onChange}
            />
            {errors.school && (
              <span style={styles} id="errors">
                {errors.school}
              </span>
            )}
            <label htmlFor="inputGroupSelect04" className="">
              Select year of graduation
            </label>
            <div className="input-group mb-3">
              <select
                onChange={onChange}
                name="year"
                className="custom-select"
                id="inputGroupSelect04"
                value={year}
              >
                <option defaultValue>Choose...</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Your Bio</label>
              <textarea
                onChange={onChange}
                placeholder="A little about you..."
                className="form-control"
                name="bio"
                id="exampleFormControlTextarea1"
                rows="3"
              />
            </div>
            <button className="btn"> Save </button>
          </div>
          <h5 className="mb-3 text-center text-muted mt-1">
            YOUR INFORMATION IN SECURE WITH US
          </h5>
        </div>
      </div>
    </form>
  );
}
