import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import data from "./data.json.js";
import SelectExercises from "./components/SelectExercises";
import About from "./components/About";
import Plan from "./components/Plan";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

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
    console.log({ event, type });
    this.setState({
      selectedTime: { ...this.state.selectedTime, [type]: event }
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <h1 className=" text-center mt-4" id="main-title">
            Feel Better in 5
          </h1>
        </div>

        <div>
          <div>
            <NavBar />

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

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
