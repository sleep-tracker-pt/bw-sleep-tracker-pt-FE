import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import "../index";
import stats from "../img/stats.svg";
import styled from "styled-components";
import { getSleepData } from "../actions";
const HoursDiv = styled.div``;

const HeadHours = styled.h1`
  text-align: center;
  font-weight: 200;
  ${"" /* margin-bottom: 40px; */}
  font-size: 100px;
`;

const YearsDiv = styled.div`
  text-align: center;
  margin-bottom: 40px;
  font-size: 28px;
  font-weight: 200;
`;

const ImgDiv = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const RecP = styled.p`
  text-align: center;
  line-height: 1.8;
  font-size: 26px;
  font-weight: 200;
  margin-top: 30px;

  p {
    margin-top: 40px;
  }
`;

const BorADiv = styled.div`
  text-align: center;
  margin-top: 30px;
  line-height: 1.8;

  font-size: 26px;
  font-weight: 200;

  p {
    margin-top: 10px;
  }
`;

class RecommendedHours extends Component {
  emojify = value => {
    switch (value) {
      case 1:
        return "🙁";
      case 2:
        return "😕";
      case 3:
        return "🙂";
      case 4:
        return "😁";
      default:
        return value;
    }
  };

  componentDidMount() {
    this.props.getSleepData();
  }

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
      case 25 <= date && date <= 64:
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
    return hours.reduce((total, count) => total + count, 0) / hours.length;
  };

  getAverageMood = sleepData => {
    let mood = sleepData.map(item => Number(item.average_rating));

    return mood.reduce((total, count) => total + count, 0) / mood.length;
  };

  getAverageHappySleep = sleepData => {
    let happySleep = sleepData
      .filter(item => item.average_rating === "4")
      .map(item => item.hours);

    if (happySleep.length > 0) {
      return (
        happySleep.reduce((total, count) => total + count, 0) /
        happySleep.length
      );
    } else {
      return;
    }
  };

  getAverageSadSleep = sleepData => {
    let sadSleep = sleepData
      .filter(item => item.average_rating === "1")
      .map(item => item.hours);
    if (sadSleep.length > 0) {
      return (
        sadSleep.reduce((total, count) => total + count, 0) / sadSleep.length
      );
    } else {
      return;
    }
  };

  behindOrAhead = () => {
    if (this.props.filteredSleepData.length > 0) {
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
          return `This week, you've averaged ${averageHours} hours of sleep per night. This means you are behind by ${range1 -
            averageHours} to ${range2 -
            averageHours} hours of sleep per night!`;
        case averageHours >= range1 && averageHours <= range2:
          return `This week, you've averaged ${averageHours} hours of sleep per night. This means you are getting exactly the amount of sleep you're supposed to! Great job 😇`;
        default:
          return "error";
      }
    } else {
      return "It looks like you don't have any sleep data entered yet 🤔";
    }
  };

  render() {
    return (
      <HoursDiv>
        <HeadHours>Hello {this.props.userData.username}!</HeadHours>
        <YearsDiv>
          You are {moment().diff(this.props.userData.birthdate, "years")} years
          young.
        </YearsDiv>

        <ImgDiv>
          <img src={stats} width="100%" />
        </ImgDiv>
        <RecP>
          According to the National Sleep Foundation,{" "}
          <b>
            {
              this.calculateHours(
                moment().diff(this.props.userData.birthdate, "years")
              )["response"]
            }{" "}
          </b>
          per night.{" "}
          {this.props.transformedSleepData.length > 0 && (
            <p>
              Your all time average for hours of sleep is{" "}
              {Math.round(
                this.getAverageHours(this.props.transformedSleepData)
              )}
              . Your all time average mood score is{" "}
              {this.emojify(
                Math.round(this.getAverageMood(this.props.transformedSleepData))
              )}
              .
            </p>
          )}
          {this.props.transformedSleepData
            .filter(item => item.average_rating === "4")
            .map(item => item.hours).length > 0 && (
            <p>
              The average number of hours you slept when you said your mood was
              😁 is {this.getAverageHappySleep(this.props.transformedSleepData)}
              .
            </p>
          )}
          {this.props.transformedSleepData
            .filter(item => item.average_rating === "1")
            .map(item => item.hours).length > 0 && (
            <p>
              The average number of hours you slept when you said your mood was
              😬 is {this.getAverageSadSleep(this.props.transformedSleepData)}.
            </p>
          )}
        </RecP>
        <BorADiv>{this.behindOrAhead()}</BorADiv>
      </HoursDiv>
    );
  }
}
const mapStateToProps = state => {
  return {
    transformedSleepData: state.transformedSleepData,
    filteredSleepData: state.filteredSleepData,
    userData: state.userData
  };
};

export default connect(
  mapStateToProps,
  { getSleepData }
)(RecommendedHours);
