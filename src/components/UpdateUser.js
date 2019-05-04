import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import {updateUser} from "../actions/";
import account from "../img/account.svg";

const AccountPage = styled.div `
margin: 50px auto;
width: 60%;
${'' /* height: 500px; */}
text-align: center;
background: rgba(211, 220, 227, 0.5);
`;

const UserDiv = styled.div `
margin: 50px auto;
`;

const UserName = styled.h3 ``;

const Bday = styled.h4 ``;

const BdayP = styled.p `

`;

const UpdateForm = styled.form ``;

const NameInput = styled.input ``;

const NewPasswordInput = styled.input ``;

const DateDiv = styled.div ``;

const CurrentPassword = styled.input ``;

const ChangeButton = styled.button ``;
const UpdateButton = styled.button ``;

const UserDisplay = styled.div `
margin: 50px auto;
width: 60%;
${'' /* height: 300px; */}
background: rgba(211, 220, 227, 0.8);
`;

const ImgDiv = styled.div ``;






<<<<<<< HEAD
import { updateUser } from "../actions/"
import { logout } from "../actions/";
||||||| merged common ancestors
import { updateUser } from "../actions/";
=======
>>>>>>> 6c475c781870c86732b31e1760ffbd5fc3f995ca

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
      this.setState({...this.state, clicked: true});
    }
    handleChange = date => {
      this.setState({ birthDate: date });
    };
    render() {
      
      if (this.state.clicked) {
        return (
       
          <AccountPage>
           <ImgDiv>
          <img src={account} width="50%"/>
        </ImgDiv>
            <UserDiv>
              <UserName>Username:{this.props.userData.username}</UserName>
              <Bday>Birthday: {this.props.userData.birthDate}</Bday>
            </UserDiv>

            <UpdateForm onSubmit={this.updateHandler}>

              <NameInput 
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.inputHandler}
                placeholder="new username"
              />

              <NewPasswordInput 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
              placeholder="new password"
              />
            <BdayP>Please enter your Birthdate:</BdayP>

            <DateDiv>
              <DatePicker
                onChange={this.handleChange}
                value={this.state.birthDate}
                clearIcon={null}
              />
              </DateDiv>

              <CurrentPassword 
                type="password"
                name="current password"
                value={this.state.checkpassword}
                onChange={this.inputHandler}
                placeholder="current password"
              />
              <ChangeButton type="submit">Update Changes</ChangeButton>

            </UpdateForm>
          </AccountPage>
          );
      } else {
        return (
          <UserDisplay>
             <UserName>Username:{this.props.userData.username}</UserName>
              <Bday>Birthday: {this.props.userData.birthdate}</Bday>
          <UpdateButton onClick={this.updateOpener}>Update {this.props.userData.username}</UpdateButton>
          </UserDisplay>
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
