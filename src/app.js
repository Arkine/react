import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import makeRoutes from "./routes";
import { Provider } from "react-redux";

import 'font-awesome/css/font-awesome.css';
import './app.css';

import App from 'containers/App/App';

import reducers from 'reducers';

import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const mountNode = document.querySelector('#root');
const routes = makeRoutes();

let realCompose = compose;

if (process.env.NODE_ENV !== "production") {
	realCompose = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const store = createStore(
	reducers,
	realCompose(applyMiddleware(thunk))
);

ReactDOM.render(
	<Provider store={store}>
		<App routes={routes}
				history={browserHistory} />
	</Provider>
, mountNode);