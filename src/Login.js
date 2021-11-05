import React, { useState } from "react";

function Login(props) {
  const [disabled, cDisabled] = useState(false);

  const submitHandler = (e) => {
    console.log("submitted");
    e.preventDefault();
    cDisabled(true);

    props.client
      .login(e.target.username.value, e.target.password.value)
      .then((response) => {
        cDisabled(false);
        console.log(response.data.token);
        props.loggedIn(response.data.token);
      })
      .catch((error) => {
        alert("an error occurred, please try again");
        console.log(error);
        cDisabled(false);
      });
  };

  return (
    <>
      <div className="login-container">
        <br />
        <form onSubmit={(e) => submitHandler(e)}>
          <br />
          <input
            className="login-input"
            type="text"
            name="username"
            placeholder="user"
            disabled={disabled}
          />
          <br />

          <br />
          <input
            className="login-input"
            type="password"
            name="password"
            placeholder="pw"
            disabled={disabled}
          />
          <br />
          <br />
          <button type="submit" disabled={disabled}>
            {" "}
            Submit{" "}
          </button>
        </form>
        <p>email t2955330 at gmail dot com to request access</p>
      </div>
    </>
  );
}

export default Login;
