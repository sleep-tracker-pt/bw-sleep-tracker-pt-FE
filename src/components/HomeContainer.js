import React from "react";
import BlogAggregator from "./BlogAggregator";
import HomeMoodChart from "./HomeMoodChart";
import StatsContainer from "./StatsContainer";
import styled from 'styled-components';


const PageDiv= styled.div `



`;
const HeaderGroup= styled.div ``;

const Title= styled.h3 `
font-family: 'Open Sans', sans-serif; 
font-weight: 800;
color: #fff;
font-size: 30px;
margin: 10px;
`;
const ContainerDiv= styled.div ``;


const Grid1Div= styled.div ``;


const Grid2Div= styled.div ``;


const Grid3Div= styled.div ``;


const HomeContainer = () => {
  return (
    <PageDiv>
    <HeaderGroup>
      <Title>Welcome to your SleepTracker Dashboard</Title>
    </HeaderGroup>
    <ContainerDiv >

    <Grid1Div >
      <BlogAggregator />
    </Grid1Div>

    <Grid2Div >
      <HomeMoodChart/>
    </Grid2Div>

    <Grid3Div> 
      <StatsContainer/>
    </Grid3Div>

    </ContainerDiv>
    </PageDiv>
  );
};

export default HomeContainer;
