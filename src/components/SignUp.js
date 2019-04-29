import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/index";

import DatePicker from "react-date-picker";
import moment from "moment";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.routeChange = this.routeChange.bind(this);
    this.state = {
      isFetching: false,
      addUser: null,
      username: "",
      password: "",
      birthDate: moment()
        .subtract(13, "years")
        .toDate()
    };
  }

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
  };

  handleChange = date => {
    this.setState({ birthDate: date });
  };

  routeChange() {
    let path = `/login`;
    this.props.history.push(path);
}
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
          name="password"
          placeholder="password"
          onChange={this.inputHandler}
          value={this.state.password}
        />
        <h4>Birthday:</h4>
        <DatePicker
          onChange={this.handleChange}
          value={this.state.birthDate}
          clearIcon={null}
        />
        <button type="submit" onClick={this.routeChange}>Register</button>
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
