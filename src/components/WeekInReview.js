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
  }



  render() {
    return (
      <div>
        <h4>A demo of synchronized AreaCharts</h4>
        <AreaChart
          width={500}
          height={200}
          data={this.props.sleepData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <p>Maybe some other content</p>
        <AreaChart
          width={500}
          height={200}
          data={this.props.sleepData}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
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
  )(WeekInReview)
);
