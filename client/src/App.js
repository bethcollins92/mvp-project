import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SelectExercises from "./components/SelectExercises";
import About from "./components/About";
import Plan from "./components/Plan";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heart: [],
      mind: [],
      body: [],

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
  componentDidMount = () => {
    fetch("/heart_exercises")
      .then(res => res.json())
      .then(json => {
        this.setState({
          heart: json
        });
        console.log(json);
      })
      .catch(err => {
        this.setState({ error: err });
      });
    fetch("/mind_exercises")
      .then(res => res.json())
      .then(json => {
        this.setState({
          mind: json
        });
        console.log(json);
      })
      .catch(err => {
        this.setState({ error: err });
      });
    fetch("/body_exercises")
      .then(res => res.json())
      .then(json => {
        this.setState({
          body: json
        });
        console.log(json);
      })
      .catch(err => {
        this.setState({ error: err });
      });
  };
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
                  heart={this.state.heart}
                  mind={this.state.mind}
                  body={this.state.body}
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
