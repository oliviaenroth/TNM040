import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import Routes from './Routes';

import './index.css';

ReactDOM.render(
	<Router history={browserHistory} routes={Routes} />,
	document.getElementById('root')
);
