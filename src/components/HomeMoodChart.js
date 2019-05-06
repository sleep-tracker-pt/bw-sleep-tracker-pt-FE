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
  LabelList
} from "recharts";

import { getSleepData } from "../actions";
import styled from "styled-components";

const StyledJumbotron = styled.div`
  ${"" /* width: 350px;
height: 300px; */}
`;
class HomeMoodChart extends Component {
  componentWillMount() {
    this.props.getSleepData();
  }

  render() {
    return (
      <StyledJumbotron>
        <ScatterChart
          width={450}
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
      </StyledJumbotron>
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
