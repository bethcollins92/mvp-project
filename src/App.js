import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import data from "./data.json";
import SelectExercises from "./components/SelectExercises";
import About from "./components/About";
import Plan from "./components/Plan";

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

  addExercise(exercise, type) {
    this.setState({
      selectedExercises[type]: exercise
    })
  }

  addTime(event, type) {
    this.setState({
      selectedTime[type]: event
    });
  }

  render() {
    return (
      <Router>
        <div className="container">
          <h1>Feel Better in 15</h1>
        </div>
        <div>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/exercises">Exercises</Link>
                </li>

                <li>
                  <Link to="/plan">Your Plan</Link>
                </li>
              </ul>
            </nav>

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
