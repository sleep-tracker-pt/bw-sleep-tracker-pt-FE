import React, { Component } from 'react';
import {connect} from 'react-redux';
import {loginSuccess} from '../actions/';

 class LoginPage extends Component {
     state = {
         creds:{
         username: 'user',
         password: 'password'
         }
     }
     handleChange = (e) =>{
        e.preventDefault();
        this.setState({
            creds:{
            ...this.state.creds,
            [e.target.name] : e.target.value
            }
        })
     }
     handleSubmit = (e) =>{
         e.preventDefault();
        this.props.loginSuccess(this.state.creds)
        
     }

  render() {
      if(this.props.isloggedIn){
        this.props.history.push("/Home")
      }
    
    console.log(this.props.loggedIn, this.props.isFetching)
    return (
      <div>
        <form onSubmit ={this.handleSubmit}>
        <input onChange = {this.handleChange}
        type ="text"
        placeholder ='username'
        name = "username"
        value = {this.state.username}
        
        />
        <input onChange = {this.handleChange}
        type ="password"
        placeholder ='password'
        name = "password"
        value = {this.state.password}
        
        />

        <button value ="submit">submit</button>


        

        </form>
      </div>
    )
  }
}
 const mapStateToProps = state =>({
    //   isloggedIn:state.loggingIn,
    //   isFetching:state.isFetching
 })

export default connect (
    mapStateToProps,
    {loginSuccess}
)(LoginPage)