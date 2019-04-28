import React, { Component } from "react";
import { connect } from "react-redux";

class NightlyStats extends Component {
  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    transformedSleepData: state.transformedSleepData
  };
};

export default connect(
  mapStateToProps,
  {}
)(NightlyStats);
