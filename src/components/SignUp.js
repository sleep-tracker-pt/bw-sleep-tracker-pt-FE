import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/index";

import DatePicker from "react-date-picker";
import moment from "moment";

class SignUp extends Component {
  state = {
    isFetching: false,
    addUser: null,
    username: "",
    password: "",
    birthDate: moment()
      .subtract(13, "years")
      .toDate()
  };

  inputHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    let userData = {
      username: this.state.username,
      password: this.state.password,
      birthDate: this.state.birthDate
    };
    this.props.addUser(userData);
    this.setState({
      username: "",
      password: "",
      birthDate: moment()
        .subtract(13, "years")
        .toDate()
    });
    this.props.history.push("/login");
  };

  handleChange = date => {
    this.setState({ birthDate: date });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          name="username"
          placeholder="username"
          onChange={this.inputHandler}
          value={this.state.username}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={this.inputHandler}
          value={this.state.password}
        />
        <p>Please enter your Birthdate:</p>
        <DatePicker
          onChange={this.handleChange}
          value={this.state.birthDate}
          clearIcon={null}
        />
        <button type="submit">Register</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(
  mapStateToProps,
  { addUser }
)(SignUp);
