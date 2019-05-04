import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-date-picker";

import { updateUser } from "../actions/"
import { logout } from "../actions/";

export class UpdateUser extends Component {
  state = {
    clicked: false,
    isFetching: false,
    isUpdating: null,
    userData: [],
    username: "",
    password: "",
    checkpassword: "",
    birthDate: ""
  };

  inputHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateHandler = e => {
    e.preventDefault();
    let updatedUserData = {
      username: this.state.username,
      password: this.state.password,
      birthdate: this.state.birthDate,
      checkpassword: this.state.checkpassword
    };
    this.props.updateUser(updatedUserData);
    this.setState({
      username: "",
      password: "",
      checkpassword: "",
      birthdate: ""
    });
    this.props.logout();
    this.props.history.push("/login");
    alert("user info has been updated, please login again to continue");
  };

  updateOpener = () => {
    this.setState({ ...this.state, clicked: true });
  };
  handleChange = date => {
    this.setState({ birthDate: date });
  };
  render() {
    if (this.state.clicked) {
      return (
        <div>
          <div>
            <h3>Username:{this.props.userData.username}</h3>
            <h4>Birthday: {this.props.userData.birthDate}</h4>
          </div>

          <form onSubmit={this.updateHandler}>
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.inputHandler}
              placeholder="new username"
            />

            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
              placeholder="new password"
            />
            <div>Please enter your Birthdate:</div>

            <div>
              <DatePicker
                onChange={this.handleChange}
                value={this.state.birthDate}
                clearIcon={null}
              />
            </div>

            <input
              type="password"
              name="checkpassword"
              value={this.state.checkpassword}
              onChange={this.inputHandler}
              placeholder="current password"
            />
            <button type="submit">Update Changes</button>
          </form>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Username:{this.props.userData.username}</h3>
          {/* <h4>current password:{this.props.userData.password}</h4> */}
          <h5>Birthday: {this.props.userData.birthdate}</h5>
          <button onClick={this.updateOpener}>
            Update {this.props.userData.username}
          </button>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    userData: state.userData
  };
};

export default connect(
  mapStateToProps,
  { updateUser, logout }
)(UpdateUser);
