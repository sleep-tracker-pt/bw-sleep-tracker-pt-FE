import React from "react";
import BlogAggregator from "./BlogAggregator";
import HomeMoodChart from "./HomeMoodChart";
import StatsContainer from "./StatsContainer";


const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <h1>Sleep Tracker Front End 😂👌💯</h1>
      <BlogAggregator />
      <HomeMoodChart/>
      <StatsContainer/>
    </div>
  );
};

export default HomeContainer;
