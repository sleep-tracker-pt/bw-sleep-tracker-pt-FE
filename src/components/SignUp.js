import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addUser} from '../actions/index';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFetching: false,
            addUser: null,
            username: '',
            password: '',
        }
    }

    inputHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addUser(this.state)
        this.setState({
            
            username: '',
            password: '',
        })
    }

    render(){
        return(
            <form onSubmit={this.submitHandler} >
                <input name='username' placeholder='username' onChange={this.inputHandler} value={this.state.username}/>
                <input name='password' placeholder='password' onChange={this.inputHandler} value={this.state.password}/>
                <button type='submit'>Register</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
};

export default connect(mapStateToProps, { addUser })(SignUp);