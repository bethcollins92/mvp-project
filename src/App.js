import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import data from "./data.json";
import selectExercises from "./components/selectExercises";
import chooseTime from "./components/chooseTime";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data,
      selectedExercises: []
    };
  }

  addExercise(exercise) {
    this.setState({
      selectedExercises: [...this.state.selectedExercises, exercise]
    });
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/exercises">Exercises</Link>
                </li>
                <li>
                  <Link to="/time">Time</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/exercises">
                <selectExercises
                  data={this.state.data}
                  addExercise={selected => this.addExercise(selected)}
                />
              </Route>
              <Route path="/time">
                <chooseTime selectedExercises={this.state.selectedExercises} />
              </Route>
            </Switch>
          </div>
        </Router>

        <div className="container">
          <h1>Feel Better in 15</h1>
          <button>About the Program</button>
          <button>Heart</button>
          <button>Mind</button>
          <button>Body</button>
          <button>Start</button>
        </div>
      </div>
    );
  }
}

export default App;
