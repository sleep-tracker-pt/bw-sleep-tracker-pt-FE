import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import HomeMoodChart from "./HomeMoodChart";

class DataContainer extends Component {
  state = {};
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
    {}
  )(DataContainer)
);
