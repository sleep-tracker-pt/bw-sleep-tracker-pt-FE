import React from "react";
import {connect} from "react-redux";

import DatePicker from "react-date-picker";

import {updateUser} from "../actions";

export class UpdateUser extends React.Component {
    constructor() {
    super();
    
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
      const user=this.props;
      if (this.state.clicked) {
        return (
          <div>
            <div>
              <h2>Username:{this.props.username}</h2>
              <h4>current password:{this.props.password}</h4>
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




            </form>
          </div>
          )
      }
      
    }

    // mapStateToProps = () => ({});

 export default UpdateUser
//  connect(mapStateToProps, {updateUser})(UpdateUser);