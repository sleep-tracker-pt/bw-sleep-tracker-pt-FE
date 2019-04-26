import React, { Component } from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/";

class LoginPage extends Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }
  state = {
    creds: {
      username: "",
      password: ""
    }
  };
  handleChange = e => {
    e.preventDefault();
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.loginSuccess(this.state.creds);
  };

  routeChange() {
      let path = `/signup`;
      this.props.history.push(path);
  }

  render() {
    if (this.props.isloggedIn) {
      this.props.history.push("/home");
    }

    console.log(this.props.loggedIn, this.props.isFetching);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
          />
          <input
            onChange={this.handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
          />

          <button value="submit">Submit</button>
          <button onClick={this.routeChange}>Sign Up</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    isloggedIn: state.loggingIn,
    isFetching: state.isFetching
  };
};

export default connect(
  mapStateToProps,
  { loginSuccess }
)(LoginPage);
