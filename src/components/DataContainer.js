import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { getUsers } from "../actions";

import HomeMoodChart from "./HomeMoodChart";

class DataContainer extends Component {
  state = {};

  componentDidMount() { 
    this.props.getUsers()
  }

  render() {
    return (
      <div className="DataContainer">
        <HomeMoodChart />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    { getUsers }
  )(DataContainer)
);
