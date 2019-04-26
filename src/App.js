import React from "react";
import "./App.css";

import HomeContainer from "./components/HomeContainer";

import NavBar from './components/Navbar';
import LoginPage from './components/LoginPage';
import SignUp from './components/SignUp';
import {Route, } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
   <div> 
    <div>
      <NavBar />
      <Route path = "/login" component = {LoginPage} />
      <Route path = "/signup" component = {SignUp} />
    </div>
    <div>
      <div>
        <NavBar />
        <Route path="/login" component={LoginPage} />
      </div>
      <div>
        <PrivateRoute exact path="/home" component={HomeContainer} />
      </div>
      <div>
        <PrivateRoute path="/stats" component={StatsContainer} />
      </div>
    </div>
  );
}

export default App;
