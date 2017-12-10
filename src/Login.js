import React, { Component } from 'react';
//import { Redirect, Route } from 'react-router';

import DB from './users';
import './Login.css';


class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			//redirect: false,
			username: "",
			password: ""
		}

	}

	handlePost(event) {
	    event.preventDefault();
	    const data = new FormData(event.target);

	    for(let i=0; i < DB.length; i++){

	    	if(data.get("username") === DB[i]["username"] && data.get("password") === DB[i]["password"])
	    	{
	    		this.redirected();
	    	}
	    }
    }

	//send var that says the user is logged in. TO BE IMPLEMENTED
  redirected(){
  	window.location = "/game";
  }

  render() {
    return (
    	<div className="container">
    		<h1>Tamagotchi Replica 2000</h1>
    		<div className="login">
	        	<form onSubmit={this.handlePost.bind(this)} >
			        <input name="username" type="text" placeholder="username" />
			        <input name="password" type="password" placeholder="password" />
			        <button>Login</button>
		        </form>
        	</div>
        	<a href="/signup">Sign Up!</a>
    	</div>
    )
  }
}

export default Login;
