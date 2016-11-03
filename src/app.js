import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import makeRoutes from "./routes";
import { Provider } from "react-redux";

import 'font-awesome/css/font-awesome.css';
import './app.css';

import App from 'containers/App/App';

import reducers from 'reducers';

import { createStore } from 'redux';

const mountNode = document.querySelector('#root');
const routes = makeRoutes();

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
	<Provider store={store}>
		<App routes={routes}
				history={browserHistory} />
	</Provider>
, mountNode);