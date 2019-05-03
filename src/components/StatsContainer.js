import React, { Component } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";
import { addNewSession } from "../actions";
import { connect } from "react-redux";
import { getSleepData } from "../actions";

import WeekInReview from "./WeekInReview";
import NightlyStats from "./NightlyStats";
import RecommendedHours from "./RecommendedHours";
class StatsContainer extends Component {
  state = {
    startDate: moment().toDate(),
    endDate: moment()
      .add(8, "hours")
      .toDate(),
    bed_t_rating: 2,
    work_t_rating: 2,
    average_rating: 2,
    showModal: false
  };

  componentDidMount() { 
    this.props.getSleepData()
  }

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
      bed_t_rating: this.state.bed_t_rating,
      work_t_rating: this.state.work_t_rating,
      average_rating: this.state.average_rating
    });
    this.setState({ showModal: false });
    this.props.getSleepData();
  };

  handleChangeStart = date => {
    this.setState({ startDate: date });
  };

  handleChangeEnd = date => {
    this.setState({ endDate: date });
  };

  handleCheck = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <RecommendedHours/>
        <WeekInReview props={this.state} />
        <NightlyStats props={this.state} />
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
                  name="startDate"
                  onChange={this.handleChangeStart}
                  value={this.state.startDate}
                  disableClock
                  clearIcon={null}
                  isCalendarOpen={true}
                  pickerPosition="bottom-left"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Woke up</Form.Label>
                <DateTimePicker
                  name="endDate"
                  onChange={this.handleChangeEnd}
                  value={this.state.endDate}
                  disableClock
                  clearIcon={null}
                  isCalendarOpen={true}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Bedtime Mood</Form.Label>
                <Form.Check
                  type="radio"
                  label="😁"
                  name="bed_t_rating"
                  id="mood4"
                  value="4"
                  checked={this.state.bed_t_rating === "4"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙂"
                  name="bed_t_rating"
                  id="mood3"
                  value="3"
                  checked={this.state.bed_t_rating === "3"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="😕"
                  name="bed_t_rating"
                  id="mood2"
                  value="2"
                  checked={this.state.bed_t_rating === "2"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙁"
                  name="bed_t_rating"
                  id="mood1"
                  value="1"
                  checked={this.state.bed_t_rating === "1"}
                  onChange={this.handleCheck}
                  inline
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Work Mood</Form.Label>
                <Form.Check
                  type="radio"
                  label="😁"
                  name="work_t_rating"
                  id="mood4"
                  value="4"
                  checked={this.state.work_t_rating === "4"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙂"
                  name="work_t_rating"
                  id="mood3"
                  value="3"
                  checked={this.state.work_t_rating === "3"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="😕"
                  name="work_t_rating"
                  id="mood2"
                  value="2"
                  checked={this.state.work_t_rating === "2"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙁"
                  name="work_t_rating"
                  id="mood1"
                  value="1"
                  checked={this.state.work_t_rating === "1"}
                  onChange={this.handleCheck}
                  inline
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Average Mood</Form.Label>
                <Form.Check
                  type="radio"
                  label="😁"
                  name="average_rating"
                  id="mood4"
                  value="4"
                  checked={this.state.average_rating === "4"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙂"
                  name="average_rating"
                  id="mood3"
                  value="3"
                  checked={this.state.average_rating === "3"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="😕"
                  name="average_rating"
                  id="mood2"
                  value="2"
                  checked={this.state.average_rating === "2"}
                  onChange={this.handleCheck}
                  inline
                />
                <Form.Check
                  type="radio"
                  label="🙁"
                  name="average_rating"
                  id="mood1"
                  value="1"
                  checked={this.state.average_rating === "1"}
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
  return {
    transformedSleepData: state.transformedSleepData,
    filteredSleepData: state.filteredSleepData
  };
};

export default connect(
  mapStateToProps,
  { addNewSession, getSleepData }
)(StatsContainer);
