import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleInputS = (name, value) => {
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSignupSubmit = () => {
    axios("/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      data: { email, password },
    })
      .then((res) => {
        history.push("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <Card
        name={"Sign up"}
        handleInputS={(name, value) => {
          handleInputS(name, value);
        }}
        email={email}
        password={password}
        handleSignupSubmit={() => handleSignupSubmit()}
      />
    </div>
  );
}
