import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import DateTimePicker from "react-datetime-picker";
import moment from "moment";

import { editSession } from "../actions";

import "./StatsComponent.css";
import "../index.css";

const StyledModal = styled(Modal)`
color: ;
background: background: rgba(211, 220, 227, 0.7);`;

const MoodLabel = styled.label`
  margin: 20px;

  @media (max-width: 400px) {
    margin: 10px;
  }
`;

const WakeP = styled.h5`
  margin: 0 auto;
  text-transform: uppercase;
  margin-top: 15px;
`;

const StyledTitle = styled(Modal.Title)`
  text-transform: uppercase;
  margin: 0 auto;
`;

const SessionForm = styled.form`
  margin: 0 auto;
  text-align: center;
`;
class NightlyStat extends Component {
  state = {
    startDate: moment(this.props.filteredSleepData.startDate).toDate(),
    endDate: moment(this.props.filteredSleepData.endDate).toDate(),
    bed_t_rating: this.props.filteredSleepData.bed_t_rating,
    work_t_rating: this.props.filteredSleepData.work_t_rating,
    average_rating: this.props.filteredSleepData.average_rating,
    hours: this.props.filteredSleepData.hours,
    showModal: false
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
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

  validateData = () => {
    return (
      moment(this.state.startDate).isBefore(this.state.endDate) &&
      this.state.bed_t_rating &&
      this.state.work_t_rating &&
      this.state.average_rating
    );
  };

  handleSubmit = e => {
    e.preventDefault();
    let editedSession = {
      id: this.props.filteredSleepData.id,
      userID: Number(localStorage.getItem("userId")),
      start: moment(this.state.startDate, "YYYY-MM-DD HH:mm").format(
        "YYYY-MM-DD HH:mm"
      ),
      end: moment(this.state.endDate, "YYYY-MM-DD HH:mm").format(
        "YYYY-MM-DD HH:mm"
      ),
      hours: Number(this.state.hours),
      bed_t_rating: this.state.bed_t_rating,
      work_t_rating: this.state.work_t_rating,
      average_rating: this.state.average_rating
    };

    this.props.editSession(this.props.filteredSleepData.id, editedSession);
    this.setState({
      showModal: false
    });
  };

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
        <Button
          variant="outline-light"
          size="sm"
          onClick={this.handleShowModal}
          block
        >
          Edit sleep
        </Button>
        <Button variant="outline-danger" size="sm" block>
          Delete
        </Button>
        <StyledModal
          size="lg"
          show={this.state.showModal}
          onHide={this.handleCloseModal}
        >
          <Modal.Header closeButton>
            <StyledTitle>Edit sleep session</StyledTitle>
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
              Submit edits
            </Button>
          </Modal.Footer>
        </StyledModal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default withRouter(
  connect(
    mapStateToProps,
    { editSession }
  )(NightlyStat)
);
