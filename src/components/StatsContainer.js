import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import { addNewSession } from "../actions";
import { connect } from "react-redux";
import WeekInReview from "./WeekInReview";

class StatsContainer extends Component {
  state = {
    startDate: moment().toDate(),
    endDate: moment()
      .add(8, "hours")
      .toDate(),
    selectedMood: 0
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addNewSession({
      startDate: moment(this.state.startDate, "YYYY-MM-DD HH:mm").format(
        "YYYY-MM-DD HH:mm"
      ),
      endDate: moment(this.state.endDate, "YYYY-MM-DD HH:mm").format(
        "YYYY-MM-DD HH:mm"
      ),
      hours: JSON.stringify(
        moment(this.state.endDate).diff(this.state.startDate, "hours")
      ),
      selectedMood: this.state.selectedMood
    });
    this.setState({ showModal: false });
  };

  handleChange = date => {
    this.setState({ date });
  };

  handleCheck = e => {
    this.setState({ selectedMood: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>This is the stats container 🤔</h1>
        <WeekInReview />
        <Button variant="primary" onClick={this.handleShowModal}>
          Add sleep session
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add sleep session</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Went to bed</Form.Label>
                <DateTimePicker
                  onChange={this.onChange}
                  value={this.state.startDate}
                  disableClock
                  clearIcon={null}
                  isCalendarOpen={true}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Woke up</Form.Label>
                <DateTimePicker
                  onChange={this.onChange}
                  value={this.state.endDate}
                  disableClock
                  clearIcon={null}
                  isCalendarOpen={true}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Mood</Form.Label>
                <Form.Check
                  type="radio"
                  label="😁"
                  name="mood4"
                  id="mood4"
                  value="4"
                  checked={this.state.selectedMood === "4"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙂"
                  name="mood3"
                  id="mood3"
                  value="3"
                  checked={this.state.selectedMood === "3"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="😕"
                  name="mood2"
                  id="mood2"
                  value="2"
                  checked={this.state.selectedMood === "2"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙁"
                  name="mood1"
                  id="mood1"
                  value="1"
                  checked={this.state.selectedMood === "1"}
                  onChange={this.handleCheck}
                  inline
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Back
            </Button>
            <Button variant="primary" onClick={this.handleSubmit}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(
  mapStateToProps,
  { addNewSession }
)(StatsContainer);
