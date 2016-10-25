import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';

import styles from './styles.module.css';

export default class App extends React.Component {
	static propTypes = {
		routes: PropTypes.object.isRequired,
		history: PropTypes.object.isRequired
	}

	get content() {
		return(
			<Router 
				routes={this.props.routes}
				history={this.props.history} 
			/>
		);
	}

	render() {
		return (
			<div className={styles.wrapper}>
				<div>
					{this.content}
				</div>
			</div>
		);
	}
}