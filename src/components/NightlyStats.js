import React, { Component } from "react";
import { connect } from "react-redux";
import NightlyStat from "./NightlyStat";

class NightlyStats extends Component {
  render() {
    return (
      <div className="nightly-stats">
      <h4>last 7 days</h4>
        {this.props.transformedSleepData.map(stat => {
          return <NightlyStat transformedSleepData={stat} />;
        })}
      </div>
    );
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
