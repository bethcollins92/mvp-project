import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Login(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.email);

  let history = useHistory();

  const handleInputL = (name, value) => {
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleLoginSubmit = () => {
    axios("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { email, password },
    })
      .then((results) => {
        localStorage.setItem("token", results.data.token);
        history.push("/exercises");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Card
        name={"Login"}
        handleInputL={(name, value) => {
          handleInputL(name, value);
        }}
        email={email}
        password={password}
        handleLoginSubmit={() => handleLoginSubmit()}
      />
      ;
    </div>
  );
}
