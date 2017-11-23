import React, { Component } from 'react';
import { Redirect, Route } from 'react-router';

import DB from './users';

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

	 /*   for(let i=0; i < DB[0].length; i++){
	    	if(data.get("username") === DB[i]["username"] && data.get("password") === DB[i]["password"])
	    	{
*/	    		this.redirected();
//	    	}	
//	    }
	    
	    console.log(data.get("username"));
	    console.log(data.get("password"));



	    
	    fetch('/api/form-submit-url', {
	      method: 'POST',
	      body: data,
    });
  }

  redirected(){
  	console.log("hh");
  	this.setState({redirect: true});
  }

  render() {
  	console.log(this.state.redirect);
  	if(this.state.redirect === true){
  		console.log("right now im in render()");
  		return <Redirect to="/game" />
  	}

    return (
      <div className="login">
        	<h2>Login</h2>
        	<form onSubmit={this.handlePost.bind(this)} >
		        <input name="username" type="text" />
		        <input name="password" type="password" />
		        <button>Login</button>
	        </form>
      </div>
    )
  }
}

export default Login;
