import React from "react";
import "./App.css";

import HomeContainer from "./components/HomeContainer";
import NavBar from "./components/NavBar.js";
import LoginPage from "./components/LoginPage";
import EditUser from "./components/UpdateUser";

import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      
      <div>
        <div>
          <NavBar />
        </div>
        <div>
        <Route exact path="/" component={LoginPage} />
        </div>
        <div>
          <Route path="/login" component={LoginPage} />
        </div>
          <div>
        <Route path="/signup" component={SignUp} />
      
        </div>
        <div>
          <PrivateRoute exact path="/home" component={HomeContainer} />
        </div>
        <div>
          <PrivateRoute path="/account" component={EditUser} />
        </div>
      </div>
    </div>
  );
}

export default App;