import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from "recharts";
import { Modal, Form, Button } from "react-bootstrap";
import DateTimePicker from "react-datetime-picker";

import styled from "styled-components";

import moment from "moment";

import { getSleepData } from "../actions";

import { addNewSession } from "../actions";

import "../index.css";
import "./StatsComponent.css";

const NightDiv = styled.div`
  margin: 40px 0;
  @media (max-width: 800px) {
    display: none;
  }
`;

const SessionForm = styled.form`
  margin: 0 auto;
  text-align: center;
`;
const WakeP = styled.h5`
  margin: 0 auto;
  text-transform: uppercase;
  margin-top: 15px;
`;

const MoodLabel = styled.label`
  margin: 20px;

  @media (max-width: 400px) {
    margin: 10px;
  }
`;
const StyledTitle = styled(Modal.Title)`
  text-transform: uppercase;
  margin: 0 auto;
`;

const StyledModal = styled(Modal)`
color: ;
background: background: rgba(211, 220, 227, 0.7);`;

const Flexbox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

class WeekInReview extends Component {
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

  componentDidMount() {
    getSleepData();
  }

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
    this.setState({
      showModal: false
    });
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
        <Flexbox>
          <h2>Week in review </h2>
          <h5>Hours of sleep this week</h5>
          <ResponsiveContainer width="75%" height={200}>
          <AreaChart
            width={400}
            height={200}
            data={this.props.filteredSleepData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0                 
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="startDate" />
            <YAxis dataKey="hours" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="hours"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
          </ResponsiveContainer>
          <h5>Mood this week</h5>
          
          <ResponsiveContainer width="75%" height={200}>
          <AreaChart
            width={400}
            height={300}
            data={this.props.filteredSleepData}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="startDate" />
            <YAxis dataKey="average_rating" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="average_rating"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
          </AreaChart>
          </ResponsiveContainer>

          <Button variant="outline-light" onClick={this.handleShowModal}>
            Add sleep session
          </Button>
        </Flexbox>
        <StyledModal
          size="lg"
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <StyledTitle>Add sleep session</StyledTitle>
          </Modal.Header>
          <Modal.Body>
            <SessionForm>
              <WakeP>Bedtime:</WakeP>
              <DateTimePicker
                name="startDate"
                onChange={this.handleChangeStart}
                value={this.state.startDate}
                disableClock
                clearIcon={null}
                isCalendarOpen={true}
                pickerPosition="bottom-left"
              />
              <WakeP>Waketime:</WakeP>
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
              <WakeP>bedtime mood:</WakeP>
              <MoodLabel for="mood4">
                {this.state.bed_t_rating === "4" ? (
                  <i className="far fa-grin-beam fa-4x fa-pulse" />
                ) : (
                  <i className="far fa-grin-beam fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood3">
                {this.state.bed_t_rating === "3" ? (
                  <i className="far fa-grin fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood2">
                {this.state.bed_t_rating === "2" ? (
                  <i className="far fa-frown-open fa-4x fa-spin" />
                ) : (
                  <i className="far fa-frown-open fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood1">
                {this.state.bed_t_rating === "1" ? (
                  <i className="far fa-grimace fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grimace fa-4x" />
                )}
              </MoodLabel>

              <WakeP>work mood:</WakeP>
              <MoodLabel for="mood4work">
                {this.state.work_t_rating === "4" ? (
                  <i className="far fa-grin-beam fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin-beam fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood3work">
                {this.state.work_t_rating === "3" ? (
                  <i className="far fa-grin fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood2work">
                {this.state.work_t_rating === "2" ? (
                  <i className="far fa-frown-open fa-4x fa-spin" />
                ) : (
                  <i className="far fa-frown-open fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood1work">
                {this.state.work_t_rating === "1" ? (
                  <i className="far fa-grimace fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grimace fa-4x" />
                )}
              </MoodLabel>

              <WakeP>average mood:</WakeP>
              <MoodLabel for="mood4avg">
                {this.state.average_rating === "4" ? (
                  <i className="far fa-grin-beam fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin-beam fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood3avg">
                {this.state.average_rating === "3" ? (
                  <i className="far fa-grin fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grin fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood2avg">
                {this.state.average_rating === "2" ? (
                  <i className="far fa-frown-open fa-4x fa-spin" />
                ) : (
                  <i className="far fa-frown-open fa-4x" />
                )}
              </MoodLabel>
              <MoodLabel for="mood1avg">
                {this.state.average_rating === "1" ? (
                  <i className="far fa-grimace fa-4x fa-spin" />
                ) : (
                  <i className="far fa-grimace fa-4x" />
                )}
              </MoodLabel>
            </SessionForm>
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
        </StyledModal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    sleepData: state.sleepData,
    transformedSleepData: state.transformedSleepData,
    filteredSleepData: state.filteredSleepData
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { getSleepData, addNewSession }
  )(WeekInReview)
);
