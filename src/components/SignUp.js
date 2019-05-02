import React, { Component } from "react";
import { connect } from "react-redux";
import { addUser } from "../actions/index";
import "../index.css";
import DatePicker from "react-date-picker";
import moment from "moment";
import styled from "styled-components";
import sleepingman from "../img/sleepingman.png";
import sheep from "../img/sheep.svg";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
const ImgDiv = styled.div`
  margin: 0;
  padding: 0;

  @media (max-width: 600px) {
    img {
      display: none;
    }
  }
`;

const FormDiv = styled.div`
  width: 300px;
  background: rgba(211, 220, 227, 0.5);

  img {
    margin: 0 auto;
  }
`;

const RegForm = styled.form``;

const RegInputUser = styled.input`
  width: 100%;
  margin-top: 10px;
  border: 0px solid #154e6e;
  border-radius: 8px;
  align-content: center;
  text-align: center;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
`;

const RegInputPass = styled.input`
  width: 100%;
  margin-top: 10px;
  border: 0px solid #154e6e;
  border-radius: 8px;
  align-content: center;
  text-align: center;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);
`;

const Birthdate = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const DateDiv = styled.div`
  text-align: center;
`;

const RegButton = styled.button`
  width: 100%;
  margin: 10px auto;
  border-radius: 5px;
  border: 0;
  color: #d3dce3;
  font-weight: 600;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  background: #0f2f5a;
`;

const Label = styled.p`
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 14px;
  text-align: center;
`;

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
      birthdate: this.state.birthDate
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
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0 && this.state.birthDate.length > 0;
  }

  handleChange = date => {
    this.setState({ birthDate: date });
  };

  render() {
    return (
      <Container>
        <ImgDiv>
          <img src={sleepingman} />
        </ImgDiv>
        <FormDiv>
          <RegForm onSubmit={this.submitHandler}>
            <Label>Choose your username</Label>
            <RegInputUser
              name="username"
              placeholder="username"
              onChange={this.inputHandler}
              value={this.state.username}
            />

            <Label>Choose a password</Label>
            <RegInputPass
              type="password"
              placeholder="password"
              name="password"
              onChange={this.inputHandler}
              value={this.state.password}
            />
            <Birthdate>Please enter your Birthdate:</Birthdate>

            <DateDiv>
              <DatePicker
                onChange={this.handleChange}
                value={this.state.birthDate}
                clearIcon={null}
              />
              <button type="submit" disabled={!this.validateForm()}>Register</button>
            </DateDiv>
          </RegForm>
          <img src={sheep} />
        </FormDiv>
      </Container>
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
