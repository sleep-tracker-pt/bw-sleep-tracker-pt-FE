import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";

class RecommendedHours extends Component {
  calculateHours = date => {
    switch (true) {
      case 0 <= date && date <= 2:
        return {
          response: "you need 12 to 15 hours of sleep",
          range1: 12,
          range2: 15
        };
      case 3 <= date && date <= 5:
        return {
          response: "you need 10 to 13 hours of sleep",
          range1: 10,
          range2: 13
        };
      case 6 <= date && date <= 13:
        return {
          response: "you need 9 to 11 hours of sleep",
          range1: 9,
          range2: 11
        };
      case 14 <= date && date <= 17:
        return {
          response: "you need 8 to 10 hours of sleep",
          range1: 8,
          range2: 10
        };
      case 18 <= date && date <= 25:
        return {
          response: "you need 7 to 9 hours of sleep",
          range1: 7,
          range2: 9
        };
      case 12 <= date && date <= 64:
        return {
          response: "you need 10 to 13 hours of sleep",
          range1: 10,
          range2: 13
        };
      case 64 <= date && date <= 64:
        return {
          response: "you need 7 to 9 hours of sleep",
          range1: 7,
          range2: 9
        };
      case 65 <= date:
        return {
          response: "you need 7 to 8 hours of sleep",
          range1: 7,
          range2: 8
        };
      default:
        return date;
    }
  };

  getAverageHours = sleepData => {
    let hours = sleepData.map(item => item.hours);
    return hours.reduce((acc, c) => acc + c, 0) / hours.length;
  };

  behindOrAhead = () => {
    let averageHours = this.getAverageHours(
      this.props.filteredSleepData
    ).toFixed();
    let range1 = this.calculateHours(
      moment().diff(this.props.userData.birthdate, "years")
    )["range1"];
    let range2 = this.calculateHours(
      moment().diff(this.props.userData.birthdate, "years")
    )["range2"];

    switch (true) {
      case averageHours > range2:
        return `This week, you've averaged ${averageHours} hours of sleep per night. This means you are ahead by ${averageHours -
          range2} to ${averageHours - range1} hours of sleep per night!`;
      case averageHours < range1:
        return `This week, you've averaged ${averageHours} hours of sleep per night. This means you are behind by ${averageHours -
          range1} to ${averageHours - range2} hours of sleep per night!`;
      case averageHours > range1 && averageHours < range2:
        return `This week, you've averaged ${averageHours} hours of sleep per night. This means you are getting exactly the amount of sleep you're supposed to! Great job 😇`;
      default:
        return "error";
    }
  };

  render() {
    return (
      <div>
        <div>Hello {this.props.userData.username}.</div>
        <div>
          You are {moment().diff(this.props.userData.birthdate, "years")} years
          young.
        </div>
        <div>
          According to the National Sleep Foundation,{" "}
          {
            this.calculateHours(
              moment().diff(this.props.userData.birthdate, "years")
            )["response"]
          }{" "}
          per night.
        </div>
        <div>{this.behindOrAhead()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    sleepData: state.sleepData,
    transformedSleepData: state.transformedSleepData,
    filteredSleepData: state.filteredSleepData,
    userData: state.userData
  };
};

export default connect(
  mapStateToProps,
  {}
)(RecommendedHours);
