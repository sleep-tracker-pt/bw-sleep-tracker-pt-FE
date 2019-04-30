import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";

import "./index.css";
import App from "./App";
import reducer from "./reducers";
import {BrowserRouter as Router} from 'react-router-dom'

import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';
const store = createStore(reducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <Router>
  <Provider store ={store}>
  <Router>
  <App />
  </Router>
  </Provider>
  </Router>, document.getElementById('root'));
