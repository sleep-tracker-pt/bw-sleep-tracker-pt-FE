import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {logout} from '../actions/';
import styled from 'styled-components';
import logo from '../img/logo.png';
import  '../index.css';


const Nav = styled.nav `
  width: 100%;
  height: 50px;
  background: rgba(211, 220, 227, .5);
  backdrop-filter: blur(80px);
  ${'' /* margin: 0 auto; */}
  padding: 5px;
`;

const NavContainer = styled.div `
  width: 100%;

 display: flex;
 justify-content: space-between;
 margin-left: 10px;

`;



const NavRight = styled.div  `
  text-align: center;
  margin-top: 7px;
`;


const NavItem = styled.a `
 text-decoration: none;
 color: black;
 margin-right: 15px;
 font-weight: 600;


 a:visited {
   color: black;
 }
 a:hover {
   color: white;
   background: #0F2F5A;
   text-decoration: none;
 }

 
`;





class NavBar extends React.Component {
  constructor(props) {
    super();
    this.handleLogout = this.handleLogout.bind(this);
    // this.routeChange = this.routeChange.bind(this);
  }
  handleLogout = e => {
    e.preventDefault();
    this.props.logout();
    window.location.reload();
  };
  
//   routeChange() {
//     let path = `/login`;
//     this.props.history.push(path);
// }

    render () {
        if (this.props.isloggedIn) {
          return (
          <Nav>
            <NavContainer>
              <Link to="/home" >
                <img src={logo}  width="40px" height="40px" />
              </Link>
              <NavRight>
                  <NavItem>
                  <Link  to="/home">Home</Link>
                  </NavItem>
                  <NavItem>
                  <Link  to="/account">Account</Link>
                  </NavItem>
                  <NavItem>
                  <a  href="/" onClick={this.handleLogout}>Logout</a>
                  </NavItem>
              </NavRight>
            </NavContainer>
          </Nav> 
          );
        } else {
          return (
            <Nav>
            <NavContainer>
              <Link to="/home" >
                <img src={logo}  width="40px" height="40px" />
              </Link>
              <NavRight>
                  <NavItem>
                  <Link  to="/home">Home</Link>
                  </NavItem>
                  <NavItem>
                  <Link  to="/login">Login</Link>
                  </NavItem>
              </NavRight>
            </NavContainer>
          </Nav>  
        );
        }
        
    }
}

const mapStateToProps = state => {
  return {
    isloggedIn: state.loggingIn,
    
  };
};

export default connect(mapStateToProps, { logout })(NavBar);