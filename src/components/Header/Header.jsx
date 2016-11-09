import React from 'react';
import { Link } from 'react-router';

import styles from './styles.module.css';

export default class Header extends React.Component {

	render() {
		return (
			<div className={styles.topbar}>
				<Link to="/"><h1>Home</h1></Link>
				<input
					type="text"
					placeholder="Enter Location..."
					// value={this.state.value}
					onChange={this.props.onChange}
				/>
				<section>
					Fullstack.io
				</section>
			</div>
		)
	}
}