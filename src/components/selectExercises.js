import React, { Component } from "react";

export default class selectExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: {},
      type: ""
    };
  }
  //this function is to show more information about the exercise the user clicks on. I want to make it come up in a pop up box.
  showExercise(exercise, type) {
    this.setState({
      exercise,
      type
    });
  }
  //this function is to send data (the exercise the user has selected)back to the parent App.js to be stored in the selectedExercises array.
  handleClick() {
    this.props.addExercise({
      exercise: this.state.exercise,
      type: this.state.type
    });
  }

  handleChange(event) {
    this.props.addTime(event.target.value, { type: this.state.type });
  }

  render() {
    return (
      <div className="container">
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
                className="btn btn-outline-warning"
              >
                Select
              </button>
            </div>
          </div>
        </div>

        <div>
          <h4 className="mt-4">Heart</h4>
          <div className="row mt-5">
            {this.props.data.heart.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise, "heart")}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow">
                  <img src={exercise.img} className="card-img-top" alt="alt" />
                  <div className="card-body">
                    <h3 className="card-title">{exercise.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mt-4">Mind</h4>

          <div className="row mt-5">
            {this.props.data.mind.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise, "mind")}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow">
                  <img src={exercise.img} className="card-img-top" alt="alt" />
                  <div className="card-body">
                    <h3 className="card-title">{exercise.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="mt-4">Body</h4>
          <div className="row mt-5">
            {this.props.data.body.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise, "body")}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow">
                  <img src={exercise.img} className="card-img-top" alt="alt" />
                  <div className="card-body">
                    <h3 className="card-title">{exercise.title}</h3>
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
