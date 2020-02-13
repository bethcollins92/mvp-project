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
                  addExercise={selected => this.addExercise(selected)}
                />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/plan">
                <Plan selectedExercises={this.state.selectedExercises} />
              </Route>
            </Switch>
          </div>
        </Router>

        <div className="container">
          <h1>Feel Better in 15</h1>
        </div>
      </div>
    );
  }
}

export default App;
