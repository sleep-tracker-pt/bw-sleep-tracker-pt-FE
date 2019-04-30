import React from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const NightlyStat = props => {
  return (
    <div>
        <p>hello</p>
      <BarChart width={150} height={40} data={props}>
        <Bar dataKey="bed_t_rating" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default NightlyStat;
