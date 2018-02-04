import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router'
import { store, history } from './redux/store';
import './index.css';
import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={store}>
	    { /* Tell the Router to use our enhanced history */ }
	    <Router history={history}>
	      <Route path="/" component={App}>
	      </Route>
	    </Router>
  	</Provider>, 
  	document.getElementById('root'));

registerServiceWorker();
