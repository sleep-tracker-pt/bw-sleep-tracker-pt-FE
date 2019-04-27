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

import { getSleepData } from "../actions";

class WeekInReview extends Component {
  componentDidMount() {
    this.props.getSleepData()
    this.changeData();
  }

  changeData = () => {
    const emojify = value => {
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
    const result = this.props.sleepData.map(item => ({
      ...item,
      scale: emojify(item.scale)
    }));
    console.log(result);
  };

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
