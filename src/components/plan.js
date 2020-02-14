import React, { Component } from "react";

export default class plan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div>{this.props.selectedExercises.heart.title}</div>
        <div>{this.props.selectedExercises.mind.title}</div>
        <div>{this.props.selectedExercises.body.title}</div>
        <div>{this.props.selectedTime.heart}</div>
        <div>{this.props.selectedTime.mind}</div>
        <div>{this.props.selectedTime.body}</div>
      </div>
    );
  }
}
