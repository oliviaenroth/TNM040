import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Login from './Login';

export default (
	<div>
	    <Route path='/' component={Login} />
	  	<Route path='game' component={App} />
  	</div>
);