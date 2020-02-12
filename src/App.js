import React from "react";
import "./App.css";

import data from "./data.json";
import Intro from "./components.Intro";
import selectExercises from "./components.selectExercises";
import chooseTime from "./components.selectExercises";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      exercise: {},
      selectedHeart: {},
      selectedMind: {},
      selectedBody: {}
    };
  }

  showExercise(exercise) {
    this.setState({
      exercise: exercise
    });
  }

  // handleClick(exercise) {
  //   if(exercise)
  // }

  render() {
    return (
      <div className="App container">
        <h1 className="mb-3 mt-3">Feel Better in 15</h1>
        <p>
          The Feel Better in 15 program is designed to keep health and
          well-being simple and accessible to everyone. How many times have you
          started on a health journey with all the right intentions, but
          somehow, somewhere you lost your way? You'll be happy to know, you're
          not a failure, it's the goals and expectations you set yourself that
          are unsustainable. The Feel Better in 15 program focuses on the three
          main aspects of health: heart, mind and body. It requires only 15
          minutes of your time per day, all the exercises are free and can be
          done from the comfort of your own home.{" "}
        </p>
        <div className="card shadow">
          <div className="row">
            <div className="col-md -3 mb-5 mt-5 ml-5">
              <img src={this.state.exercise.img} className="img-fluid" />
            </div>
            <div className="col-md -9 mt-5">
              <h1>{this.state.exercise.title}</h1>
              <p>{this.state.exercise.time}</p>
              <p>{this.state.exercise.description}</p>
              <p>{this.state.exercise.tips}</p>
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
            {this.state.data.heart.map((exercise, index) => (
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
            {this.state.data.mind.map((exercise, index) => (
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
            {this.state.data.body.map((exercise, index) => (
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

export default App;
