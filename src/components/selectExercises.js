import React, { Component } from "react";

export default class selectExercises extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exercise: {}
    };
  }

  showExercise(exercise) {
    this.setState({
      exercise: exercise
    });
  }
  render() {
    return (
      <div>
        <button>Choose your time</button>
        <div className="card shadow">
          <div className="row">
            <div className="col-md -3 mb-5 mt-5 ml-5">
              <img src={this.props.exercise.img} className="img-fluid" />
            </div>
            <div className="col-md -9 mt-5">
              <h1>{this.props.exercise.title}</h1>
              <p>{this.props.exercise.time}</p>
              <p>{this.props.exercise.description}</p>
              <p>{this.props.exercise.tips}</p>
              <button
                // onClick={() => this.handleClick(this.state.exercise)}
                type="button"
                class="btn btn-outline-warning"
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
                onClick={() => this.showExercise(exercise)}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow">
                  <img src={exercise.url} className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{exercise.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4>Mind</h4>

          <div className="row mt-5">
            {this.props.data.mind.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise)}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow">
                  <img src={exercise.url} className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">{exercise.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4>Body</h4>
          <div className="row mt-5">
            {this.props.data.body.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise)}
                className="col-lg-3 col-md-5 col-sm-6"
              >
                <div className="card shadow">
                  <img src={exercise.url} className="card-img-top" />
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
