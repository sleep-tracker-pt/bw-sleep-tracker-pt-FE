import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";
import { Jumbotron } from "react-bootstrap";

import { getSleepData } from "../actions";

class HomeMoodChart extends Component {
  componentDidMount() {
    this.props.getSleepData();
  }

  render() {
    return (
      <Jumbotron fluid>
        <LineChart
          width={1000}
          height={600}
          data={[
            {
              hoursAxis: "1",
              alice: 3,
              bob: 5,
              moodAxis: "😭"
            },
            {
              hoursAxis: "2",
              alice: 2,
              bob: 3,
              moodAxis: "😢"
            },
            {
              hoursAxis: "3",
              alice: 4,
              bob: 6,
              moodAxis: "🙁"
            },
            {
              hoursAxis: "4",
              alice: 2,
              bob: 3,
              moodAxis: "🙂"
            },
            {
              hoursAxis: "5",
              alice: 1,
              bob: 2,
              moodAxis: "😁"
            },
            {
              hoursAxis: "6",
              alice: 5,
              bob: 4,
              moodAxis: "😂"
            },
            {
              hoursAxis: "7",
              alice: 3,
              bob: 5,
              moodAxis: "🤣"
            }
          ]}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="moodAxis" />
          <YAxis dataKey="hoursAxis" />
          <Tooltip />
          <Legend />

          <Line type="monotone" dataKey="alice" stroke="pink" />
          <Line type="monotone" dataKey="bob" stroke="green" />
        </LineChart>
      </Jumbotron>
    );
  }
}

const mapStateToProps = state => {
  return {
    sleepData: state.sleepData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSleepData }
  )(HomeMoodChart)
);
