import React from "react";
import moment from "moment";
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
        <p>{moment(props.transformedSleepData.start).startOf('day').fromNow()}</p>
        <p>to bed: {props.transformedSleepData.emojiBed}</p>
        <p>at work: {props.transformedSleepData.emojiWork}</p>
        <p>average: {props.transformedSleepData.emojiAverage}</p>

      <BarChart width={150} height={40} data={props.transformedSleepData}>
        <Bar dataKey="average_rating" fill="#8884d8" />
        <Bar dataKey="bed_t_rating" fill="#8884d8" />
        <Bar dataKey="work_t_rating" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default NightlyStat;
