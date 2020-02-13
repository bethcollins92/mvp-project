import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import data from "./data.json";
import SelectExercises from "./components/SelectExercises";
import ChooseTime from "./components/ChooseTime";
import Plan from "./components/plan";

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

  chooseTime() {}

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
                <li>
                  <Link to="/plan">Plan</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/exercises">
                <SelectExercises
                  data={this.state.data}
                  addExercise={selected => this.addExercise(selected)}
                />
              </Route>
              <Route path="/time">
                <ChooseTime selectedExercises={this.state.selectedExercises} />
              </Route>
              <Route path="/plan">
                <Plan chooseTime={time => this.chooseTime(time)} />
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
