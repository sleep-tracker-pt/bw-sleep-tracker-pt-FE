import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import {ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from "recharts";
import { Jumbotron } from "react-bootstrap";

import { getSleepData } from "../actions";

class HomeMoodChart extends Component {
  componentDidMount() {
    this.props.getSleepData();
  }

  render() {
    return (
      <Jumbotron fluid>
      <ScatterChart width={400} height={400}>
      <CartesianGrid />
      <XAxis dataKey={'scale'} type="number" name='Mood' unit='happiness'/>
      <YAxis dataKey={'hours'} type="number" name='Hours of sleep' unit='hours'/>
      <Scatter name='Sleep Quality' data={this.props.sleepData} fill='#8884d8'/>

      </ScatterChart>
    
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
