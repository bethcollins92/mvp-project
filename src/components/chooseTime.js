import React, { Component } from "react";

export default class chooseTime extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { time } = this.state;
    return (
      <div>
        <h2>Choose a time</h2>
        <div className="row mt-5">
          {this.props.selectedExercises.map((exercise, index) => (
            <div key={index}>
              <div className="card shadow">
                <img src={exercise.url} className="card-img-top" alt="alt" />
                <div className="card-body">
                  <h3 className="card-title">{exercise.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
