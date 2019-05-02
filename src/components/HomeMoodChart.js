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
import { Jumbotron } from "react-bootstrap";

import { getSleepData } from "../actions";
import styled from "styled-components";

const StyledJumbotron = styled(Jumbotron) `
${'' /* width: 350px;
height: 300px; */}

`;
class HomeMoodChart extends Component {
  componentWillMount() {
    this.props.getSleepData();
  }

  render() {
    return (
      <StyledJumbotron fluid>
        <ScatterChart width={450} height={300} margin={{top: 20, right: 20, bottom: 20, left: 20}}>
          <CartesianGrid />
          <XAxis dataKey={"bed_t_rating"} type="number" name="Mood" />
          <YAxis
            dataKey={"hours"}
            type="number"
            name="Hours of sleep"
            unit="hours"
          />
         
          <Scatter
            name="Sleep Quality"
            data={this.props.sleepData}
            fill="#8884d8"
          />
           <Tooltip cursor={{ strokeDasharray: '3 3' }} />
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
    sleepData: state.sleepData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSleepData }
  )(HomeMoodChart)
);
