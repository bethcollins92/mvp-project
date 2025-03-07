import React, { Component } from "react";

export default class plan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heartPlan: [
        this.props.selectedExercises.heart.title,
        this.props.selectedExercises.heart.img,
        this.props.selectedTime.heart
      ],
      mindPlan: [
        this.props.selectedExercises.mind.title,
        this.props.selectedExercises.mind.img,
        this.props.selectedTime.mind
      ],
      bodyPlan: [
        this.props.selectedExercises.body.title,
        this.props.selectedExercises.body.img,
        this.props.selectedTime.body
      ]
    };
  }

  render() {
    return (
      <div className="container">
        <h2 className="text-center mb-4" id="title">
          Your Plan
        </h2>
        {this.props.selectedExercises.heart.title && (
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="card shadow text-center mb-2">
                <img
                  src={this.props.selectedExercises.heart.img}
                  className="card-img-top"
                  alt="alt"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    {this.props.selectedExercises.heart.title}
                  </h3>
                  <p>at</p>
                  <p>{this.props.selectedTime.heart}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.props.selectedExercises.mind.title && (
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="card shadow text-center mb-2">
                <img
                  src={this.props.selectedExercises.mind.img}
                  className="card-img-top"
                  alt="alt"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    {this.props.selectedExercises.mind.title}
                  </h3>
                  <p>at</p>
                  <p>{this.props.selectedTime.mind}</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {this.props.selectedExercises.body.title && (
          <div className="row justify-content-center">
            <div className="col-4">
              <div className="card shadow text-center mb-2">
                <img
                  src={this.props.selectedExercises.body.img}
                  className="card-img-top"
                  alt="alt"
                />
                <div className="card-body">
                  <h3 className="card-title">
                    {this.props.selectedExercises.body.title}
                  </h3>
                  <p>at</p>
                  <p>{this.props.selectedTime.body}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
