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

import styled from "../index.css";

class WeekInReview extends Component {
  componentDidMount() {
    this.props.getSleepData();
  }

  render() {
    return (
      <div>
        <h2>Week in review </h2>
        <h5>Hours of sleep this week</h5>
        <AreaChart
          width={500}
          height={200}
          data={this.props.filteredSleepData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="startDate" />
          <YAxis dataKey="hours" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="hours"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
        <h5>Mood this week</h5>
        <AreaChart
          width={500}
          height={200}
          data={this.props.filteredSleepData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="startDate" />
          <YAxis dataKey="average_rating" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="average_rating"
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
    transformedSleepData: state.transformedSleepData,
    filteredSleepData: state.filteredSleepData,
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSleepData }
  )(WeekInReview)
);
