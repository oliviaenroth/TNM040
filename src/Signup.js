import React, { Component } from 'react';
import jsonfile from 'jsonfile';


import './Signup.css';
import DB from './users';


class Signup extends Component {

	constructor(props){
		super(props);
		this.state = {
			username: "",
			password: "",
			redirect: false
		}
		
	}

	handlePost(event) {
	    event.preventDefault();
	    const data = new FormData(event.target);
	    if(data.get("password1") === data.get("password2"))
	    {
	    	console.log("match");

	    	let file = './users';

	    	DB.push({username: data.get("username"), password: data.get("password1")});

	    	console.log(DB);
	    	console.log(jsonfile);
	    	/* SKRIVA TILL FIL FUNGERAR INTE */

	    	/*jsonfile.writeFile(file, DB, {flag: 'a'}, function (err){ console.log("write to file failed")});*/

    		
    		this.redirected();
	    }
    }

    redirected(){
  	console.log("yoo");
  	window.location = "/";
  	}

  render() {
    return (
      <div className="sign_container">
      <h1 className="sign_logo">Tamagotchi Replica 2000</h1>
	      <div className="formStuff">
		      <h1 className="sign_h1">Sign up</h1>
				<form onSubmit={this.handlePost.bind(this)}>
					
					<input name="username" type="text" placeholder="enter username"/>
					
					<input name="password1" type="password" placeholder="enter password"/>
					<input name="password2" type="password" placeholder="and again"/>

					<button>submit</button>
				</form>
	      </div>
      </div>
    )
  }
}

export default Signup;