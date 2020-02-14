import React, { Component } from "react";

export default class plan extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card shadow text-center">
              <img
                src={this.props.selectedExercises.heart.img}
                className="card-img-top"
                alt="alt"
              />
              <div className="card-body">
                <h3 className="card-title">
                  {this.props.selectedExercises.heart.title}
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card shadow text-center">
              <img
                src={this.props.selectedExercises.mind.img}
                className="card-img-top"
                alt="alt"
              />
              <div className="card-body">
                <h3 className="card-title">
                  {this.props.selectedExercises.mind.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-4">
            <div className="card shadow text-center">
              <img
                src={this.props.selectedExercises.body.img}
                className="card-img-top"
                alt="alt"
              />
              <div className="card-body">
                <h3 className="card-title">
                  {this.props.selectedExercises.body.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
