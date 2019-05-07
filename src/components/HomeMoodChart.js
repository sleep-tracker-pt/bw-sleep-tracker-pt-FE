import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  LabelList,
  ResponsiveContainer
} from "recharts";

import { getSleepData } from "../actions";
import styled from "styled-components";

const ChartDiv = styled.div`
margin-left: 150px;


@media (max-width: 1024px) {
  margin-left: 200px;
}


@media (max-width: 900px) {
  margin-left: 0px;
}
`;




class HomeMoodChart extends Component {
  componentWillMount() {
    this.props.getSleepData();
  }

  render() {
    return (
      
      <ResponsiveContainer width="75%" height={400}>
        <ChartDiv>
        <ScatterChart
          width={550}
          height={300}
          margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          fillOpacity="1"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey={"bed_t_rating"} type="number" name="Mood" />
          <YAxis
            dataKey={"hours"}
            type="number"
            name="Hours of sleep"
            unit="hours"
          />
          <Scatter
            name="All time"
            data={this.props.filteredSleepData}
            fill="#1ba261"
            shape="triangle"
          />
          <Scatter
            name="This week"
            data={this.props.sleepData}
            fill="#ffc107"
            shape="star"
          />

          <Tooltip cursor={{ strokeDasharray: "4 4" }} />
          <LabelList dataKey="start" />

          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          <Legend verticalAlign="bottom" />
        </ScatterChart>
        </ChartDiv>
        </ResponsiveContainer>
      
    );
  }
}

const mapStateToProps = state => {
  return {
    sleepData: state.sleepData,
    filteredSleepData: state.filteredSleepData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSleepData }
  )(HomeMoodChart)
);
