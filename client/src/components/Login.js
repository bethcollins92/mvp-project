import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="container">
      <div className="card shadow" id="login">
        <div className="row">
          <div className="col card-body">
            <div class="form-group">
              <h3 id="login-title"> Login </h3>
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
              ></input>
            </div>

            <button id="submit" type="submit" className="btn btn-light">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
