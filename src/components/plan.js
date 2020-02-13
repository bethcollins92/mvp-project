import React, { Component } from "react";

export default class plan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>
          {this.props.selectedExercises &&
            this.props.selectedExercises.map((exercise, index) => (
              <div key={index}>{exercise.title}</div>
            ))}
        </div>{" "}
        <div>{this.props.selectedTime}</div>
      </div>
    );
  }
}
