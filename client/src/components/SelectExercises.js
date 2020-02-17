import React, { Component } from "react";

const Modal = ({ showModal, children }) => {
  const showHideClassName = showModal
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">{children}</section>
    </div>
  );
};

export default class selectExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: {},
      type: "",
      showModal: false
    };
  }

  showModal = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  showExercise(exercise, type) {
    this.setState({
      exercise,
      type
    });
    this.showModal();
  }

  handleClick() {
    this.props.addExercise(this.state.exercise, this.state.type);
    this.hideModal();
  }

  handleChange(event) {
    this.props.addTime(event.target.value, this.state.type);
  }

  render() {
    return (
      <div className="container">
        <Modal handleClose={this.hideModal} showModal={this.state.showModal}>
          <div className="card shadow">
            <div className="row">
              <div className="col-md -3 mb-5 mt-5 ml-5">
                <img
                  src={this.state.exercise.img}
                  className="img-fluid"
                  alt="alt"
                />
              </div>
              <div className="col-md -9 mt-5">
                <h1>{this.state.exercise.title}</h1>
                <p>{this.state.exercise.time}</p>
                <p>{this.state.exercise.description}</p>
                <p>{this.state.exercise.tips}</p>
                <input
                  onChange={event => this.handleChange(event)}
                  type="time"
                ></input>
                <button
                  onClick={() => this.handleClick(this.state.exercise)}
                  type="button"
                  className="btn btn-outline-info"
                  id="select-button"
                >
                  Select
                </button>
              </div>
            </div>
            <button id="close-modal" onClick={this.hideModal}>
              close
            </button>
          </div>
        </Modal>
        <div id="exercise-section">
          <h4 className="mt-4">Heart</h4>
          <div className="row mt-5">
            {this.props.data.heart.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise, "heart")}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow" id="card">
                  <img
                    src={exercise.img}
                    className="card-img-top"
                    alt="alt"
                    id="card-image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{exercise.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="exercise-section">
          <h4 className="mt-4">Mind</h4>
          <div className="row mt-5">
            {this.props.data.mind.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise, "mind")}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow" id="card">
                  <img
                    src={exercise.img}
                    className="card-img-top"
                    alt="alt"
                    id="card-image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{exercise.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div id="exercise-section">
          <h4 className="mt-4">Body</h4>
          <div className="row mt-5">
            {this.props.data.body.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise, "body")}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow" id="card">
                  <img
                    src={exercise.img}
                    className="card-img-top"
                    alt="alt"
                    id="card-image"
                  />
                  <div className="card-body">
                    <h4 className="card-title">{exercise.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
