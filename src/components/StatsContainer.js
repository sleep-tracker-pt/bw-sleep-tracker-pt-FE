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

import styled from "styled-components";
import "../index.css";
import "./StatsComponent.css";

const WrapperDiv = styled.div`
  margin: 10px;
`;
const RecommendedDiv = styled.div``;
const WeekDiv = styled.div`
  margin-top: 30px;
`;
const NightDiv = styled.div`
  margin: 40px 0;
  @media (max-width: 800px) {
    display: none;
  }
`;
class StatsContainer extends Component {
  state = {
    startDate: moment().toDate(),
    endDate: moment()
      .add(8, "hours")
      .toDate(),
    bed_t_rating: 2,
    work_t_rating: 2,
    average_rating: 2,
    hours: 8,
    showModal: false
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  validateData = () => {
    return (
      moment(this.state.startDate).isBefore(this.state.endDate) &&
      this.state.hours > 0 &&
      this.state.bed_t_rating &&
      this.state.work_t_rating &&
      this.state.average_rating
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    let newSession = {
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
    };

    this.props.addNewSession(newSession);
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
        <WrapperDiv>
          {/* <RecommendedDiv>
        <RecommendedHours/>
        </RecommendedDiv> */}

          <WeekDiv>
            <WeekInReview props={this.state} />
          </WeekDiv>

          {/* <NightDiv>
        <NightlyStats props={this.state} />
        </NightDiv> */}
        </WrapperDiv>

        <Button variant="primary" onClick={this.handleShowModal}>
          Add sleep session
        </Button>
        <Modal
          size="lg"
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <Modal.Title>Add sleep session</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {/* <Form>
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
                  pickerPosition="bottom-left"
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
            </Form> */}
            <form>
              <p>Bedtime:</p>
              <DateTimePicker
                name="startDate"
                onChange={this.handleChangeStart}
                value={this.state.startDate}
                disableClock
                clearIcon={null}
                isCalendarOpen={true}
                pickerPosition="bottom-left"
              />
              <p>Waketime:</p>
              <DateTimePicker
                name="endDate"
                onChange={this.handleChangeEnd}
                value={this.state.endDate}
                disableClock
                clearIcon={null}
                isCalendarOpen={true}
                pickerPosition="bottom-left"
              />
              <input
                type="radio"
                name="bed_t_rating"
                id="mood4"
                value="4"
                className="input-hidden"
                checked={this.state.bed_t_rating === "4"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="bed_t_rating"
                id="mood3"
                value="3"
                className="input-hidden"
                checked={this.state.bed_t_rating === "3"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="bed_t_rating"
                id="mood2"
                value="2"
                className="input-hidden"
                checked={this.state.bed_t_rating === "2"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="bed_t_rating"
                id="mood1"
                value="1"
                className="input-hidden"
                checked={this.state.bed_t_rating === "1"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="work_t_rating"
                id="mood4work"
                value="4"
                className="input-hidden"
                checked={this.state.work_t_rating === "4"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="work_t_rating"
                id="mood3work"
                value="3"
                className="input-hidden"
                checked={this.state.work_t_rating === "3"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="work_t_rating"
                id="mood2work"
                value="2"
                className="input-hidden"
                checked={this.state.work_t_rating === "2"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="work_t_rating"
                id="mood1work"
                value="1"
                className="input-hidden"
                checked={this.state.work_t_rating === "1"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="average_rating"
                id="mood4avg"
                value="4"
                className="input-hidden"
                checked={this.state.average_rating === "4"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="average_rating"
                id="mood3avg"
                value="3"
                className="input-hidden"
                checked={this.state.average_rating === "3"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="average_rating"
                id="mood2avg"
                value="2"
                className="input-hidden"
                checked={this.state.average_rating === "2"}
                onChange={this.handleCheck}
              />
              <input
                type="radio"
                name="average_rating"
                id="mood1avg"
                value="1"
                className="input-hidden"
                checked={this.state.average_rating === "1"}
                onChange={this.handleCheck}
              />
              <p>bedtime mood:</p>
              <label for="mood4">
                {this.state.bed_t_rating === "4" ? (
                  <i className="far fa-grin-beam fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin-beam fa-4x" />
                )}
              </label>
              <label for="mood3">
                {this.state.bed_t_rating === "3" ? (
                  <i className="far fa-grin fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin fa-4x" />
                )}
              </label>
              <label for="mood2">
                {this.state.bed_t_rating === "2" ? (
                  <i className="far fa-frown-open fa-4x fa-spin" />
                ) : (
                  <i className="far fa-frown-open fa-4x" />
                )}
              </label>
              <label for="mood1">
                {this.state.bed_t_rating === "1" ? (
                  <i className="far fa-grimace fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grimace fa-4x" />
                )}
              </label>

              <p>work mood:</p>
              <label for="mood4work">
                {this.state.work_t_rating === "4" ? (
                  <i className="far fa-grin-beam fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin-beam fa-4x" />
                )}
              </label>
              <label for="mood3work">
                {this.state.work_t_rating === "3" ? (
                  <i className="far fa-grin fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin fa-4x" />
                )}
              </label>
              <label for="mood2work">
                {this.state.work_t_rating === "2" ? (
                  <i className="far fa-frown-open fa-4x fa-spin" />
                ) : (
                  <i className="far fa-frown-open fa-4x" />
                )}
              </label>
              <label for="mood1work">
                {this.state.work_t_rating === "1" ? (
                  <i className="far fa-grimace fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grimace fa-4x" />
                )}
              </label>

              <p>average mood:</p>
              <label for="mood4avg">
                {this.state.average_rating === "4" ? (
                  <i className="far fa-grin-beam fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin-beam fa-4x" />
                )}
              </label>
              <label for="mood3avg">
                {this.state.average_rating === "3" ? (
                  <i className="far fa-grin fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin fa-4x" />
                )}
              </label>
              <label for="mood2avg">
                {this.state.average_rating === "2" ? (
                  <i className="far fa-frown-open fa-4x fa-spin" />
                ) : (
                  <i className="far fa-frown-open fa-4x" />
                )}
              </label>
              <label for="mood1avg">
                {this.state.average_rating === "1" ? (
                  <i className="far fa-grimace fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grimace fa-4x" />
                )}
              </label>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Back
            </Button>
            <Button
              variant="primary"
              onClick={this.handleSubmit}
              disabled={!this.validateData()}
            >
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
