import React, { Component } from "react";
import { connect } from "react-redux";
import { loginSuccess } from "../actions/";
import styled from 'styled-components';
import  '../index.css';
import dreamer from '../img/dreamer.svg';

const Container = styled.div `

`;

const FormDiv = styled.div `
    width: 300px;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    background: rgba(211, 220, 227, .5);
    border-radius: 4px;
`;

const Form = styled.form ``;

const Input = styled.input `
    width: 100%;
    border: 0px solid #154e6e;
    border-radius: 8px;
    align-content: center;
    text-align: center;
    -webkit-box-shadow: 0 1px 5px rgba(0,0,0,0.12);
    box-shadow: 0 1px 5px rgba(0,0,0,0.12);
`;

const Label = styled.p `
    margin-top: 20px;
    margin-bottom: 5px;
    font-size: 12px;
    text-align: center;
`;

const Button = styled.button `
    width: 100%;
    margin: 10px auto;
    padding-top: 5px;
    padding-bottom: 5px;
    border-radius: 5px;
    border: 0;
    color: #d3dce3;
    font-weight: 600;
    text-align: center;
    text-decoration: none ;
    font-size: 14px;
    background: #0f2f5a;
   
}
`;

const SignUp = styled.p `
    text-align: center;
    margin-top: 30px;
    margin-bottom: 0;
`;

const ImgDiv = styled.div `
text-align: center;
margin-top: 15px;

`;



class LoginPage extends Component {
    constructor() {
        super();
        this.routeChange = this.routeChange.bind(this);
    }
  state = {
    creds: {
      username: "",
      password: ""
    },
    err: null
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

     <Container>  
     <ImgDiv>
          <img src={dreamer} width="40%" />
        </ImgDiv> 

      <FormDiv>
     
        <Form onSubmit={this.handleSubmit}>
          <Label>What is your username</Label>
          <Input
            onChange={this.handleChange}
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
          />
          <Label>Enter Password</Label>
          <Input
            onChange={this.handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
          />

          <Button value="submit">Submit</Button>
        
        
       
            <SignUp>Sign up today!</SignUp>

                <Button onClick={this.routeChange}>Sign Up</Button>

                </Form>
      </FormDiv>
        
       

          
        </Container> 
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
