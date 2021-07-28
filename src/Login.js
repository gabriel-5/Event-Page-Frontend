import React, { useState } from "react";

function Login(props) {
  super(props);
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    console.log("submit");
  };

  return (
    <>
      Login
      <br />
      <form onSubmit={(e) => this.submitHandler(e)}>
        username
        <br />
        <input type="text" name="username" disabled={disabled} />
        <br />
        password
        <br />
        <input type="password" name="password" disabled={disabled} />
        <br />
        <br />
        <button type="submit" disabled={disabled}>
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
}

export default Login;
