import React from "react";
import propTypes from "prop-types";

const RegisterForm = ({
  email,
  password,
  confirm_password,
  onChange,
  onLogin,
  login,
  onSubmit,
  errors,
  name,
  loading,
  descipline
}) => {
  const styles = {
    color: "red"
  };
  const Login = () => (
    <React.Fragment>
      <h5 className="mb-3 text-center">Login</h5>
      <div className="form-style-w3ls">
        <input
          placeholder="Your Email Id"
          name="email"
          type="email"
          required={true}
          value={email}
          onChange={onChange}
        />
        {errors.email && (
          <span style={styles} id="errors">
            {errors.email}
          </span>
        )}
        <input
          placeholder="Password"
          name="password"
          type="password"
          required={true}
          value={password}
          onChange={onChange}
        />
        {errors.password && (
          <span style={styles} id="errors">
            {errors.password}
          </span>
        )}
        <button disabled={loading} className="btn">
          {" "}
          {loading ? "Loading..." : "Login"}
        </button>
        <span>
          Don't have an account?{" "}
          <a href="" className="ml-1" onClick={onLogin}>
            Sign Up
          </a>
        </span>
      </div>
    </React.Fragment>
  );

  const Register = () => (
    <React.Fragment>
      <h5 className="mb-3 text-center">Register and Join Now</h5>
      <div className="form-style-w3ls">
        <input
          placeholder="Your Email Id"
          name="email"
          type="email"
          required={true}
          value={email}
          onChange={onChange}
        />
        {errors.email && (
          <span style={styles} id="errors">
            {errors.email}
          </span>
        )}

        <input
          placeholder="Username"
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

        <select
          onChange={onChange}
          name="descipline"
          className="custom-select"
          id="inputGroupSelect04"
          value={descipline}
        >
          <option defaultValue>Descipline...</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Engineering">Engineering</option>
        </select>
        {errors.descipline && (
          <span style={styles} id="errors">
            {errors.descipline}
          </span>
        )}
        <input
          placeholder="Password"
          name="password"
          type="password"
          required={true}
          value={password}
          onChange={onChange}
        />
        {errors.password && (
          <span style={styles} id="errors">
            {errors.password}
          </span>
        )}
        <input
          placeholder="Confirm Password"
          name="confirm_password"
          type="password"
          required={true}
          value={confirm_password}
          onChange={onChange}
        />
        {errors.confirm_password && (
          <span style={styles} id="errors">
            {errors.confirm_password}
          </span>
        )}
        <button disabled={loading} className="btn">
          {" "}
          {loading ? "Loading..." : " Sign Up"}
        </button>
        <span>
          By registering, you agree to our <a href="">Terms & Conditions.</a>
        </span>
        <br />
        <span>
          Already have an account?{" "}
          <a href="" className="ml-1" onClick={onLogin}>
            Login
          </a>
        </span>
      </div>
    </React.Fragment>
  );
  return <form onSubmit={onSubmit}>{login ? Login() : Register()}</form>;
};

RegisterForm.propTypes = {
  email: propTypes.string.isRequired,
  password: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  confirm_password: propTypes.string.isRequired,
  errors: propTypes.object.isRequired,
  onLogin: propTypes.func.isRequired,
  onSubmit: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  login: propTypes.bool.isRequired,
  loading: propTypes.bool.isRequired
};

export default RegisterForm;
