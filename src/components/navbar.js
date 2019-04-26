import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../img/logo.png';

export default class NavBar extends React.Component {
    render () {
        return (
            <nav className="Nav">
            <div className="Nav__container">
              <Link to="/" className="Nav__brand">
                <img src={logo} className="Nav__logo" width="30px" height="30px" />
              </Link>
  
              <div className="Nav__right">
                <ul className="Nav__item-wrapper">
                  <li className="Nav__item">
                    <Link className="Nav__link" to="/login">Login</Link>
                  </li>
                  <li className="Nav__item">
                    <Link className="Nav__link" to="/Home">Home</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>  
        );
    }
}