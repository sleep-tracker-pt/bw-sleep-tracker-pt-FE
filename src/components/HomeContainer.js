import React, { Component } from "react";
import { connect } from "react-redux";
import BlogAggregator from "./BlogAggregator";
import HomeMoodChart from "./HomeMoodChart";
import StatsContainer from "./StatsContainer";
import styled from "styled-components";
import { checkIfLoggedIn} from "../actions/"
import "../index.css";
import read from "../img/read.svg";
import sleeproutine from "../img/sleeproutine.png";
import mood from "../img/mood.svg";
import RecommendedHours from "./RecommendedHours";
import NightlyStats from "./NightlyStats";


const PageDiv= styled.div `
display: grid;
${'' /* width: 80%; */}
grid-gap: 10px;
${'' /* margin: 10px; */}
grid-template-columns: repeat(1, auto  );
grid-template-rows: repeat(4, [row] auto );
color: #d3dce3;

@media (max-width: 900px) {
margin-left: 3px;
${'' /* grid-gap: 10px; */}
display: grid;
${'' /* width: 350px; */}
grid-template-columns: repeat(auto-fit, 1, auto  );
${'' /* grid-template-rows: repeat(8,  ); */}
grid-gap: 0px;
${'' /* margin: 0; */}
}


`;
const HeaderGroup = styled.div`
  text-align: center;
`;

const Title = styled.h3`
  font-family: "Open Sans", sans-serif;
  ${"" /* font-weight: 200; */}
  color: #fff;
  font-size: 30px;
  margin: 10px;
  text-align: center;
`;



const Grid1Div= styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 10px;
grid-column: col 2 / span 7;
grid-row: row 3 ;

@media (max-width: 900px) {
${'' /* margin-left: 120px; */}
width: 80%;
grid-column: col 1 ;
grid-row: row 8/ span 2;
}

@media (max-width: 1080px) {
  ${'' /* margin-left: 100px; */}
grid-column: col 1 / span 5;
grid-row: row 10/ span 2;
}

`;

const ImgDiv = styled.div`
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
grid-column: col 2/ span 3;
grid-row: row 2;
text-align: center;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 5/ span 2;
${'' /* margin-left: 120px; */}
width: 80%;

}

@media (max-width: 1080px) {
  ${'' /* margin-left: 100px; */}
grid-column: col 1 / span 5;
grid-row: row 5/ span 2;
}
`;


const Grid3Div= styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 20px;
grid-column: col 1 / span 4;
grid-row: row 1 ;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 3/ span 2;
${'' /* margin-left: 120px; */}
width: 80%;

}

@media (max-width: 1080px) {
  ${'' /* margin-left: 100px; */}
grid-column: col 1 / span 5;
grid-row: row 3/ span 2;
}
`;

const Grid4Div = styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 20px;
grid-column: col 5 / span 4;
grid-row: row 2;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 1/ span 2;
${'' /* margin-left: 120px; */}
width: 80%;

}

@media (max-width: 1080px) {
  ${'' /* margin-left: 100px; */}
grid-column: col 1 / span 5;
grid-row: row 1/ span 2;
}
`;

const Grid5Div = styled.div `
background-color: #0f2f5a;
border-radius: 8px;
padding: 20px;
grid-column: col 5 / span 5 ;
grid-row: row 1;

@media (max-width: 900px) {
grid-column: col 1 / span 1;
grid-row: row 1/ span 2;
${'' /* margin-left: 120px; */}
width: 80%;

}

@media (max-width: 1080px) {
${'' /* margin-left: 20px; */}
grid-column: col 1 / span 5;
grid-row: row 8/ span 2;

img {
  display:none;
}
}
`;
class HomeContainer extends Component {
  
  componentWillMount() { 
    this.props.checkIfLoggedIn()
  }

  render() {
    return (
      <>
        <HeaderGroup>
          <Title>Welcome to your SleepTracker Dashboard</Title>
        </HeaderGroup>
        <PageDiv>
          <Grid2Div>
            <ImgDiv>
              <img src={mood} width="60%" />
            </ImgDiv>
            <h4>How does your mood relate to the number of hours you sleep?</h4>
            <HomeMoodChart />
            <ImgDiv>
              <img src={sleeproutine} width="100%" />
            </ImgDiv>
          </Grid2Div>

          <Grid3Div>
            <StatsContainer />
            {/* <ImgTipsDiv>
      <img src={tips} width="89%"/>
      </ImgTipsDiv> */}
          </Grid3Div>

          <Grid4Div>
            <RecommendedHours />
          </Grid4Div>

          <Grid1Div>
            <ImgDiv>
              <img src={read} width="40%" />
            </ImgDiv>
            <BlogAggregator />
          </Grid1Div>

          <Grid5Div>
            <NightlyStats />
          </Grid5Div>
        </PageDiv>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    isloggedIn: state.loggingIn,
  };
};

export default connect(
  mapStateToProps,
  { checkIfLoggedIn}
)(HomeContainer);
