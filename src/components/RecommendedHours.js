import React, { Component } from "react";
import { connect } from "react-redux";

class RecommendedHours extends Component {
  coolFunction = () => {
    console.log(this.props.sleepData);
    console.log(this.props.transformedSleepData);
    console.log(this.props.filteredSleepData);
    console.log(this.props.birthDate);
  };
  render() {
    return <div>{this.coolFunction()}</div>;
  }
}
const mapStateToProps = state => {
  return {
    sleepData: state.sleepData,
    transformedSleepData: state.transformedSleepData,
    filteredSleepData: state.filteredSleepData,
    birthDate: state.birthDate
  };
};

export default connect(
  mapStateToProps,
  {}
)(RecommendedHours);
