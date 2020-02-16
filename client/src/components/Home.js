import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">
            <div className="card text-center mt-3 mb-3" id="home-text">
              <h4>
                <i>
                  It only takes 5 minutes to start changing your life. For good.
                </i>
              </h4>
            </div>
            <img
              id="image"
              className="card text-center"
              src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
              alt="alt"
            />
          </div>
        </div>
      </div>
    );
  }
}
