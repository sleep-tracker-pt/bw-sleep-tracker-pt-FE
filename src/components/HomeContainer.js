import React from "react";
import BlogAggregator from "./BlogAggregator";
import HomeMoodChart from "./HomeMoodChart"


const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <h1>Sleep Tracker Front End 😂👌💯</h1>
      <BlogAggregator />
      <HomeMoodChart/>
    </div>
  );
};

export default HomeContainer;
