import React, { Component } from "react";
import { connect } from "react-redux";
import NightlyStat from "./NightlyStat";


import styled from "styled-components";
import  "../index.css";

const NightStats = styled.div `
text-align: center;
`;
const NightDiv = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;



`;
class NightlyStats extends Component {
  render() {
    return (
      <NightStats>
        <h4>Moods throughout the week</h4>
        
        <NightDiv>
           {this.props.filteredSleepData.map(stat => {
          return <NightlyStat filteredSleepData={stat} />;
          })}
        </NightDiv>
      </NightStats>
    );
  }
}

const mapStateToProps = state => {
  return {
    filteredSleepData: state.filteredSleepData
  };
};

export default connect(
  mapStateToProps,
  {}
)(NightlyStats);
