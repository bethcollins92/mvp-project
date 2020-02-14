import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import data from "./data.json";
import SelectExercises from "./components/SelectExercises";
import About from "./components/About";
import Plan from "./components/Plan";
import NavBar from "./components/NavBar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedExercises: {
        heart: {},
        mind: {},
        body: {}
      },
      selectedTime: {
        heart: "",
        mind: "",
        body: ""
      }
    };
  }
  //how do I specify whether its selected exercise or time?
  addExercise(exercise, type) {
    this.setState({
      selectedExercises: { ...this.state.selectedExercises, [type]: exercise }
    });
  }

  addTime(event, type) {
    this.setState({
      selectedTime: { ...this.state.selectedTime, [type]: event }
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <h1 className=" text-center mt-4" id="title">
            Feel Better in 5
          </h1>
        </div>

        <div>
          <div>
            <NavBar />
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-6">
                  <div className="card text-center mt-3 mb-3" id="title">
                    IT ONLY TAKES 5 MINUTES TO START CHANGING YOUR LIFE. FOR
                    GOOD.
                  </div>
                  <img
                    id="image"
                    className="card text-center"
                    src="https://lamenteesmaravillosa.com/wp-content/uploads/2017/09/cuadrados-formando-palabra-wellness-1024x683.jpg"
                    alt="alt"
                  />
                </div>
              </div>
            </div>

            <div></div>

            <Switch>
              <Route path="/exercises">
                <SelectExercises
                  data={this.state.data}
                  addExercise={(selected, type) =>
                    this.addExercise(selected, type)
                  }
                  addTime={(time, type) => this.addTime(time, type)}
                />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/plan">
                <Plan
                  selectedExercises={this.state.selectedExercises}
                  selectedTime={this.state.selectedTime}
                />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
