import React, { Component } from "react";
import moment from "moment";
import { Modal, Form, Button } from "react-bootstrap";

class NightlyStat extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <p>
          {moment(this.props.filteredSleepData.start)
            .startOf("day")
            .fromNow()}
        </p>
        <p>to bed: {this.props.filteredSleepData.emojiBed}</p>
        <p>at work: {this.props.filteredSleepData.emojiWork}</p>
        <p>average: {this.props.filteredSleepData.emojiAverage}</p>
        <Button variant="outline-light" size="sm" block>
          Edit
        </Button>
        <Button variant="outline-danger" size="sm" block>
          Delete
        </Button>
      </div>
    );
  }
}

export default NightlyStat;
