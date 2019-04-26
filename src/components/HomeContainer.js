import React from "react";
import BlogAggregator from "./BlogAggregator";
import DataContainer from "./DataContainer";

import "./HomeMoodChart.css";

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <BlogAggregator />
      <DataContainer />
    </div>
  );
};

export default HomeContainer;
