import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';

import DB from './users';
import './Login.css';

class Login extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			redirect: false
		}
		
	}

/*
*	REDIRECTING IS STUPID
*
*/
	handlePost(event) {
	    event.preventDefault();
	    const data = new FormData(event.target);

	    for(let i=0; i < DB.length; i++){
	    	console.log("from db: " +  DB[i]["username"] + DB[i]["password"] );

	    	if(data.get("username") === DB[i]["username"] && data.get("password") === DB[i]["password"])
	    	{
	    		console.log("match");
	    		this.redirected();
	    	}	
	    }
	    
	    console.log(data.get("username"));
	    console.log(data.get("password"));



	    
	    
  }

  redirected(){
  	console.log("yoo");
  	window.location = "/game";
  }

  render() {

    return (
    	<div>
    		<h1>Tamagotchi Replica 2000</h1>
    		<div className="login">
        	<form onSubmit={this.handlePost.bind(this)} >
		        <input name="username" type="text" placeholder="username" />
		        <input name="password" type="password" placeholder="password" />
		        <button>Login</button>
	        </form>
      </div>
    	</div>
      
    )
  }
}

export default Login;
