import React from "react";

export default function Card(props) {
  const handleLoginInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    props.handleInputL(name, value);
  };

  const handleSignupInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    props.handleInputS(name, value);
  };

  return (
    <div className="container">
      <div className="card shadow" id="login">
        <div className="row">
          <div className="col card-body">
            <div className="form-group">
              <h3 id="login-title">{props.name}</h3>
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={props.email}
                onChange={
                  props.name === "Login"
                    ? (e) => handleLoginInput(e)
                    : (e) => handleSignupInput(e)
                }
              ></input>
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="exampleInputPassword1"
                value={props.password}
                onChange={
                  props.name === "Login"
                    ? (e) => handleLoginInput(e)
                    : (e) => handleSignupInput(e)
                }
              ></input>
            </div>

            <button
              id="submit"
              type="submit"
              className="btn btn-light"
              onClick={
                props.name === "Login"
                  ? (e) => props.handleLoginSubmit(e)
                  : (e) => props.handleSignupSubmit(e)
              }
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
