import React, { Component } from "react";
import { connect } from "react-redux";
import NightlyStat from "./NightlyStat";

class NightlyStats extends Component {
  render() {
    return (
      <div className="nightly-stats">
        <h4>last 7 days</h4>
        {this.props.filteredSleepData.map(stat => {
          return <NightlyStat filteredSleepData={stat} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredSleepData: state.filteredSleepData
  };
};

export default connect(
  mapStateToProps,
  {}
)(NightlyStats);
