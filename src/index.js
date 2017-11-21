import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router } from 'react-router';
import Routes from './Routes';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Router history={browserHistory} routes={Routes} />,
	document.getElementById('root')
);







/*ReactDOM.render(
	<App />, document.getElementById('root')
	);
registerServiceWorker();*/
