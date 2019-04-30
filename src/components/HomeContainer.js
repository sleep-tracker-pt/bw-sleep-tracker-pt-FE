import React from "react";
import BlogAggregator from "./BlogAggregator";
import HomeMoodChart from "./HomeMoodChart";
import StatsContainer from "./StatsContainer";
import styled from 'styled-components';


const PageDiv= styled.div `
display: grid;
grid-gap: 30px;
margin: 20px;
grid-template-columns: repeat(8, [col] 150px );
grid-template-rows: repeat(1, [row] auto );
background-color: rgba(21, 78, 110, 0.7);
color: #d3dce3;



`;
const HeaderGroup= styled.div `
text-align: center;
`;

const Title= styled.h3 `
font-family: 'Open Sans', sans-serif; 
font-weight: 800;
color: #fff;
font-size: 30px;
margin: 10px;
`;



const Grid1Div= styled.div `
background-color: #0f2f5a
border-radius: 5px;
padding: 20px;
font-size: 16px;
grid-column: col / span 4;
grid-row: row /span 20;
`;


const Grid2Div= styled.div `
background-color: #0f2f5a
border-radius: 5px;
padding: 20px;
font-size: 16px;
grid-column: col 5/ span 3;
grid-row: row / span 20;
`;


const Grid3Div= styled.div `
background-color: #0f2f5a
border-radius: 5px;
padding: 20px;
font-size: 16px;
grid-column: col 8/ span 2;
grid-row: row  / span 20;
`;


const HomeContainer = () => {
  return (

    <>
     <HeaderGroup>
      <Title>Welcome to your SleepTracker Dashboard</Title>
    </HeaderGroup>
    <PageDiv>
     <Grid1Div >
      <BlogAggregator />
    </Grid1Div>

    <Grid2Div >
      <HomeMoodChart/>
    </Grid2Div>

    <Grid3Div> 
      <StatsContainer/>
    </Grid3Div>

    
    </PageDiv>

    </>
  );
};

export default HomeContainer;
