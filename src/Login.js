import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div className="login">
        	<h2>Login</h2>
        	<form>
		        <input type="text" />
		        <input type="password" />
		        <button>Login</button>
	        </form>
      </div>
    )
  }
}

export default Login;
