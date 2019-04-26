import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";

class StatsContainer extends Component {
  state = {
    showModal: false
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div>
        <h1>This is the stats container 🤔</h1>
        <Button variant="primary" onClick={this.handleShowModal}>
          Press this to show the modal
        </Button>
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleCloseModal}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default StatsContainer;
