import React from "react";
import "./App.css";

import data from "./data.json";
import selectExercises from "./components.selectExercises.js";
import chooseTime from "./components.chooseTime.js";

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
      selectedExercises: exercise
    });
  }

  render() {
    return (
      <div>
        <h1>Feel Better in 15</h1>
        <selectExercises
          data={this.state.data}
          addExercise={selected => this.addExercise(selected)}
        />
        <chooseTime selectedExercises={this.state.selectedExercises} />
      </div>
    );
  }
}

export default App;
