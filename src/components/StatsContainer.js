import React, { Component } from "react";

import { connect } from "react-redux";

import WeekInReview from "./WeekInReview";

import styled from "styled-components";
import "../index.css";


import { getSleepData } from "../actions";

import { addNewSession } from "../actions";

const WrapperDiv = styled.div`
  margin: 10px;
`;
const RecommendedDiv = styled.div``;
const WeekDiv = styled.div`
  margin-top: 30px;
`;

class StatsContainer extends Component {
  render() {
    return (
      <div>
        <WrapperDiv>
          {/* <RecommendedDiv>
        <RecommendedHours/>
        </RecommendedDiv> */}

          <WeekDiv>
            <WeekInReview props={this.state} />
          </WeekDiv>

          {/* <NightDiv>
        <NightlyStats props={this.state} />
        </NightDiv> */}
        </WrapperDiv>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transformedSleepData: state.transformedSleepData,
    filteredSleepData: state.filteredSleepData
  };
};

export default connect(
  mapStateToProps,
  { addNewSession, getSleepData }
)(StatsContainer);
