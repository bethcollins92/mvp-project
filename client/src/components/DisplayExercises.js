import React from "react";

export default function displayExercises() {
  return (
    <div id="exercise-section">
      <h4 className="mt-4">{props.name}</h4>
      <div className="row mt-5">
        {this.props.heart.map((exercise, index) => (
          <div
            key={index}
            onClick={() => props.showExercise(exercise, props.name)}
            className="col-lg-3 col-md-5 col-sm-6"
          >
            <div className="card shadow" id="card">
              <img
                src={exercise.img}
                className="card-img-top"
                alt="alt"
                id="card-image"
              />
              <div className="card-body">
                <h4 className="card-title">{exercise.title}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
