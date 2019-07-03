import React from "react";
import Nav from "../Nav/Nav";
import "./Login.css";

class Login extends React.Component {
  state = {
    login: true
  };

  register = e => {
    e.preventDefault();
    this.setState({ login: !this.state.login });
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <Nav />
        </header>
        {this.state.login ? (
          <div className="login">
            <form className="box" action="index.html" method="post">
              <h1>Login</h1>
              <input type="text" name="" placeholder="Username" />
              <input type="password" name="" placeholder="Password" />
              <input type="submit" name="" placeholder="Login" />
              <p>
                {" "}
                Click here to <a onClick={this.register}> register </a>
              </p>
            </form>
          </div>
        ) : (
          <div className="login">
            <form className="box" action="index.html" method="post">
              <h1>Register</h1>
              <input type="text" name="" placeholder="email" />
              <input type="text" name="" placeholder="username" />
              <input type="password" name="" placeholder="Password" />
              <input type="password" name="" placeholder="confirm pasword" />
              <input type="submit" name="" placeholder="Sign Up" />
              <p className="reg">
                {" "}
                Click here to <a onClick={this.register}> register </a>
              </p>
            </form>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Login;
