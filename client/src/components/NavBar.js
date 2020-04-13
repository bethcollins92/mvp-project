import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
class NavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light"
        id="navbar"
      >
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li
              className={
                "nav-item" +
                (this.props.location.pathname === "/" ? " active" : "")
              }
            >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li
              className={
                "nav-item" +
                (this.props.location.pathname === "/about" ? " active" : "")
              }
            >
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li
              className={
                "nav-item" +
                (this.props.location.pathname === "/exercises" ? " active" : "")
              }
            >
              <Link to="/exercises" className="nav-link">
                Exercises
              </Link>
            </li>
            <li
              className={
                "nav-item" +
                (this.props.location.pathname === "/plan" ? " active" : "")
              }
            >
              <Link to="/plan" className="nav-link">
                Your plan
              </Link>
            </li>
            <li
              id="login-navbar"
              className={
                "nav-item" +
                (this.props.location.pathname === "/login" ? " active" : "")
              }
            >
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <li
              id="login-navbar"
              className={
                "nav-item" +
                (this.props.location.pathname === "/signup" ? " active" : "")
              }
            >
              <Link to="/signup" className="nav-link">
                Sign up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(NavBar);
