import React from "react";
import "./App.css";

import HomeContainer from "./components/HomeContainer";
import NavBar from "./components/NavBar.js";
import LoginPage from "./components/LoginPage";
import StatsContainer from "./components/StatsContainer";

import { Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import SignUp from "./components/SignUp";

function App() {
  return (
    <div>
      <div>
        <Route path="/signup" component={SignUp} />
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
    </div>
  );
}

export default App;
q