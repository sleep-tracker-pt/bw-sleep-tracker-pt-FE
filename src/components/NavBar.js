import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoMain from '../img/Logo-main.png';
import  '../index.css';


const Nav = styled.nav `
  width: 800px;
  height: 60px;
  background: rgba(211, 220, 227, .5);
  backdrop-filter: blur(20px);
  margin: 10px auto;
  padding: 10px;
`;

const NavContainer = styled.div `
 display: flex;
 justify-content: space-between;
`;

const NavLogo = styled.img `
  margin: 10px; 
`;

const NavRight = styled.div  `
  text-align: center;
  margin-top: 7px;
`;


const NavItem = styled.a `
 text-decoration: none;
 color: black;
 margin-right: 15px;
 font-weight: 800;


 a:visited {
   color: black;
 }
 a:hover {
   color: white;
   background: 0F2F5A;
   text-decoration: none;
 }

 
`;





export default class NavBar extends React.Component {

  
    render () {
        return (
            <Nav>
            <NavContainer>
              <Link to="/" >
                <img src={LogoMain}  width="40px" height="40px" />
              </Link>
  
              <NavRight>
                  <NavItem>
                  <Link  to="/Home">Home</Link>
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