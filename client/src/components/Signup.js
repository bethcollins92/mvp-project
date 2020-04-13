import React, { useState } from "react";
import Card from "./Card";

export default function Signup(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputS = (name, value) => {
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleSignupSubmit = () => {};

  //handlesignupsubmit goes here - post request to add new user to the db

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
