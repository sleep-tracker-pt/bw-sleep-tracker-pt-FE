import React from "react";
import moment from "moment";


const NightlyStat = props => {
  return (
    <div>
        <p>{moment(props.filteredSleepData.start).startOf('day').fromNow()}</p>
        <p>to bed: {props.filteredSleepData.emojiBed}</p>
        <p>at work: {props.filteredSleepData.emojiWork}</p>
        <p>average: {props.filteredSleepData.emojiAverage}</p>
    </div>
  );
};

export default NightlyStat;
