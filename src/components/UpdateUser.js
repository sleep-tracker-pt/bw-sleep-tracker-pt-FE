import React, { Component } from "react";
import { connect } from "react-redux";

import DatePicker from "react-date-picker";

import {updateUser} from "../actions/";

export class UpdateUser extends Component {
    constructor(props) {
    super(props);
    
    this.state = {
        isFetching: false,
        isUpdating: null,
        username: this.props.username,
        password: "",
        checkpassword: this.props.password,
        birthDate: this.props.birthDate
      };
    }

    inputHandler = e => {
      this.setState({ [e.target.name]: e.target.value });
    };

    updateUserHandler = e => {
      e.preventDefault();
      this.props.updateUser(this.state);
      this.setState({...this.state, clicked: false})
    };

    updateOpener = () => {
      this.setState({...this.state, clicked: true});
    }

    render() {
      
      if (this.state.clicked) {
        return (
          <div>
            <div>
              <h3>Username:{this.props.username}</h3>
              <h4>current password:{this.state.password}</h4>
              <h5>Birthday: {this.props.birthDate}</h5>
            </div>

            <form onSubmit={this.updateUserHandler}>

              <input 
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.inputHandler}
                placeholder="new username"
              />

              <input 
              type="password"
              name="new password"
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
                name="current password"
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
             <h3>Username:{this.state.username}</h3>
              <h4>current password:{this.state.password}</h4>
              <h5>Birthday: {this.state.birthDate}</h5>
          <button onClick={this.updateOpener}>Update {this.props.username}</button>
          </div>
        );
      }
    }
  }

  const mapStateToProps = () => ({});

  export default connect(mapStateToProps, {updateUser})(UpdateUser)