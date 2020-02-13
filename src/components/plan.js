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
        <div>
          Show the selected exercises and the times the user has selected
        </div>
      </div>
    );
  }
}
