import React from "react";
import "./App.css";

import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedExercise: {}
    };
  }

  showExercise(exercise) {
    this.setState({
      selectedExercise: exercise
    });
  }

  render() {
    return (
      <div className="App container">
        <h1>Feel Better in 15</h1>

        <div className="card shadow">
          <div className="row">
            <div className="col-md -3 mb-5 mt-5 ml-5">
              <img
                src={this.state.selectedExercise.img}
                alt="alt"
                className="img-fluid"
              />
            </div>
            <div className="col-md -9 mt-5">
              <h1>{this.state.selectedExercise.title}</h1>
              <p>{this.state.selectedExercise.time}</p>
              <p>{this.state.selectedExercise.description}</p>
              <p>{this.state.selectedExercise.tips}</p>
            </div>
          </div>
        </div>

        <div>
          <h4>Heart</h4>
          <div className="row mt-5">
            {this.state.data.heart.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise)}
                className="col-lg-3 col-md-5 col-sm-6"
              >
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
        <div>
          <h4>Mind</h4>

          <div className="row mt-5">
            {this.state.data.mind.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise)}
                className="col-lg-3 col-md-5 col-sm-6"
              >
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
        <div>
          <h4>Body</h4>
          <div className="row mt-5">
            {this.state.data.body.map((exercise, index) => (
              <div
                key={index}
                onClick={() => this.showExercise(exercise)}
                className="col-lg-3 col-md-5 col-sm-6"
              >
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
      </div>
    );
  }
}

export default App;
