import React from "react";
import "./App.css";

import data from "./data.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedExercise: ""
    };
  }

  showExercise(exercise) {
    this.setState({
      selectedExercise: exercise
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Feel Better in 15</h1>

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
          <div>
            <div className="row mt-5">
              {this.state.data.mind.map((exercise, index) => (
                <div
                  key={index}
                  onClick={() => this.showFeature(exercise)}
                  className="col-lg-3 col-md-5 col-sm-6"
                >
                  <div className="card shadow">
                    <img
                      src={exercise.url}
                      className="card-img-top"
                      alt="alt"
                    />
                    <div className="card-body">
                      <h3 className="card-title">{exercise.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h4>Body</h4>
          <div></div>
        </div>
      </div>
    );
  }
}

export default App;
