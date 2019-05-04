import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import DatePicker from "react-date-picker";
import styled from "styled-components";
import {updateUser} from "../actions/";
import { logout } from "../actions/";
import account from "../img/account.svg";

const AccountPage = styled.div `
margin: 50px auto;
width: 70%;
${'' /* height: 500px; */}
text-align: center;
background: rgba(211, 220, 227, 0.7);
`;

const UserDiv = styled.div `
margin: 50px auto;
`;

const UserName = styled.h3 `
margin: 20px;
font-weight: 200;
text-transform: uppercase;

`;

const Bday = styled.h4 `
margin: 10px;
font-weight: 200;
text-transform: uppercase;
margin-bottom: 20px;
`;

const LabelP = styled.p `
margin-top: 20px;
margin-bottom: 0;
font-size: 16px;
font-weight: 400;
`;

const UpdateForm = styled.form ``;


const DateDiv = styled.div ``;

const Input = styled.input `
  width: 90%;
    border: 0px solid #154e6e;
    border-radius: 8px;
    align-content: center;
    text-align: center;
    -webkit-box-shadow: 0 1px 5px rgba(0,0,0,0.12);
    box-shadow: 0 1px 5px rgba(0,0,0,0.12);
    padding: 10px 0;
    margin-top: 0;
    margin-bottom: 20px;
    ${'' /* margin: 3px auto; */}
`;




const Button = styled.button `
border-radius: 5px;
padding: 10px;
margin-bottom: 20px;
${'' /* width: 100px; */}
font-weight: 200;
`;

const UserDisplay = styled.div `
margin: 50px auto;
width: 70%;
text-align: center;

${'' /* height: 200px; */}
background: rgba(211, 220, 227, 0.7);
`;

const ImgDiv = styled.div ``;







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
              <UserName>Username:<br/>{this.props.userData.username}</UserName>
              <Bday>Birthday: {this.props.userData.birthdate}</Bday>
            </UserDiv>

            <UpdateForm onSubmit={this.updateHandler}>
            <LabelP>New UserName</LabelP>
              <Input 
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.inputHandler}
                placeholder="new username"
              />

              <LabelP>New Password</LabelP>
              <Input 
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.inputHandler}
              placeholder="new password"
              />
            <LabelP>Please enter your Birthdate:</LabelP>

            <DateDiv>
              <DatePicker
                onChange={this.handleChange}
                value={this.state.birthDate}
                clearIcon={null}
              />
              </DateDiv>

              <LabelP>Current Password</LabelP>
              <Input 
                type="password"
                name="checkpassword"
                value={this.state.checkpassword}
                onChange={this.inputHandler}
                placeholder="current password"
              />
              <Button type="submit">Update Changes</Button>

            </UpdateForm>
          </AccountPage>
          );
      } else {
        return (
          <UserDisplay>
           <ImgDiv>
          <img src={account} width="50%"/>
        </ImgDiv>
             <UserName>Username:<br/>{this.props.userData.username}</UserName>
              <Bday>Birthday: {this.props.userData.birthdate}</Bday>
          <Button onClick={this.updateOpener}>Update {this.props.userData.username}</Button>
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
