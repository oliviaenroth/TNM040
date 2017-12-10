import React from 'react';
import { Route } from 'react-router';

import App from './App';
import Login from './Login';
import Signup from './Signup';

export default (
	<div>
	    <Route path='/' component={Login} />
	  	<Route path='game' component={App} />
	  	<Route path='signup' component={Signup} />
	</div>
);
