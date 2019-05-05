import React from "react";
import BlogAggregator from "./BlogAggregator";
import HomeMoodChart from "./HomeMoodChart";
import StatsContainer from "./StatsContainer";
import styled from "styled-components";
import "../index.css";
import read from "../img/read.svg";
import sleeproutine from "../img/sleeproutine.png";
import mood from "../img/mood.svg"
import RecommendedHours from "./RecommendedHours";
import NightlyStats from "./NightlyStats";


const PageDiv= styled.div `
display: grid;
grid-gap: 20px;
margin: 30px;
grid-template-columns: repeat(6, [col] 150px );
grid-template-rows: repeat(4, [row] auto );
color: #d3dce3;

@media (max-width: 900px) {
  margin-left: -105px;
display: grid;
grid-template-columns: repeat(1, auto );
${'' /* grid-template-rows: repeat(8,  ); */}
grid-gap: 5px;
${'' /* margin: 0; */}
}


`;
const HeaderGroup= styled.div `
text-align: center;
`;

const Title= styled.h3 `
font-family: 'Open Sans', sans-serif; 
${'' /* font-weight: 200; */}
color: #fff;
font-size: 30px;
margin: 10px;
text-align: center;
`;



const Grid1Div= styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 10px;
grid-column: col 1 / span 3;
grid-row: row 2 ;

@media (max-width: 900px) {
${'' /* margin-left: -10px; */}
grid-column: col 1 / span 1;
grid-row: row 8/ span 2;
}

@media (max-width: 1024px) {
  margin-left: 100px;
grid-column: col 1 / span 5;
grid-row: row 10/ span 2;
}

`;

const ImgDiv = styled.div `
text-align: center;
margin: 10px;
`;

// const ImgTipsDiv = styled.div `
// text-align: center;
// margin-top: 40px;
// `;

const Grid2Div= styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 20px;
grid-column: col 1/ span 3;
grid-row: row ;
text-align: center;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 5/ span 2;
}

@media (max-width: 1024px) {
  margin-left: 100px;
grid-column: col 1 / span 5;
grid-row: row 5/ span 2;
}
`;


const Grid3Div= styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 20px;
grid-column: col 4 / span 3;
grid-row: row 1 ;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 3/ span 2;
}

@media (max-width: 1024px) {
  margin-left: 100px;
grid-column: col 1 / span 5;
grid-row: row 3/ span 2;
}
`;

const Grid4Div = styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 20px;
grid-column: col 7 / span 3;
grid-row: row 1;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 1/ span 2;
}

@media (max-width: 1024px) {
  margin-left: 100px;
grid-column: col 1 / span 5;
grid-row: row 1/ span 2;
}
`;

const Grid5Div = styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 20px;
grid-column: col 4 / span 7 ;
grid-row: row 2;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 1/ span 2;
}

@media (max-width: 1024px) {
margin-left: 100px;
grid-column: col 1 / span 5;
grid-row: row 8/ span 2;

img {
  display:none;
}
}
`;
const HomeContainer = () => {
  return (

    <>
     <HeaderGroup>
      <Title>Welcome to your SleepTracker Dashboard</Title>
    </HeaderGroup>
    <PageDiv>

    <Grid2Div >
      <ImgDiv>
        <img src={mood} width="60%" />
      </ImgDiv>
      <h4>How does your mood relate to the number of hours you sleep?</h4>
      <HomeMoodChart/>
    </Grid2Div>

    <Grid3Div> 
      <StatsContainer/>
      {/* <ImgTipsDiv>
      <img src={tips} width="89%"/>
      </ImgTipsDiv> */}
    </Grid3Div>

    <Grid4Div>
      <RecommendedHours/>
      
    </Grid4Div>

    <Grid1Div >
        <ImgDiv>
         <img src={read} width="40%"/>
        </ImgDiv>
        <BlogAggregator />
      </Grid1Div>

      <Grid5Div>
        <NightlyStats  />
        <ImgDiv>
          <img src={sleeproutine} width="100%" />
        </ImgDiv>
    </Grid5Div>
    </PageDiv>

  

    </>
  );
};

export default HomeContainer;
