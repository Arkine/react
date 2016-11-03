import React, { PropTypes as T } from 'react';

import classnames from 'classnames';
import connect from 'react-redux';

import styles from './styles.module.css';

export default class InfoBox extends React.Component {
	defaultProps = {
		loading: true,
	}

	getInfo() {
		if (!this.props.place) {
			return;
		}

	}

	render() {
		return(
			<div className={styles.infoBox}>
				{this.getInfo()}
			</div>
		);
	}
}