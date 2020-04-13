import React, { useState } from "react";
import Card from "./Card";

export default function Login(props) {
  const [email, setEmail] = useState(props.email);
  const [password, setPassword] = useState(props.email);

  const handleInputL = (name, value) => {
    name === "email" ? setEmail(value) : setPassword(value);
  };

  const handleLoginSubmit = () => {};

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
