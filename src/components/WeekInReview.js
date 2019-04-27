import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import moment from "moment";

import { getSleepData } from "../actions";

class WeekInReview extends Component {
  componentWillMount() {
    this.props.getSleepData();
  }

  render() {
    return (
      <div>
        <h2>This is week in review </h2>
        <h4>Hours of sleep this week</h4>
        <AreaChart
          width={500}
          height={200}
          data={this.props.transformedSleepData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="start" />
          <YAxis dataKey="hours" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="hours"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        <p>Mood this week</p>
        <AreaChart
          width={500}
          height={200}
          data={this.props.transformedSleepData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="start" />
          <YAxis dataKey="scale" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="scale"
            stroke="#82ca9d"
            fill="#82ca9d"
          />
        </AreaChart>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transformedSleepData: state.transformedSleepData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSleepData }
  )(WeekInReview)
);