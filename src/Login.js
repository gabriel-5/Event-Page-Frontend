import React from 'react';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      disabled: false
    }
  }

  submitHandler(e) {
    console.log("submit")
  }

  render() {
    return (
      <>
        Login<br />
        <form onSubmit={(e) => this.submitHandler(e)} >
          username<br />
          <input type="text" name="username" disabled={this.state.disabled} /><br />
      password<br />
          <input type="password" name="password" disabled={this.state.disabled} /><br /><br />
          <button type="submit" disabled={this.state.disabled}> Submit </button>
        </form>
      </>
    )

  }
}

export default Login;
