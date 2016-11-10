import React from 'react';
import { Link } from 'react-router';

import styles from './styles.module.css';

export default class Header extends React.Component {
	state = {
		value: ''
	}

	onChangeHandler = (e) => {
		let val = e.target.value;

		this.setState({
			value: val
		})
	}

	onSubmitHandler = (e) => {
		e.preventDefault();
		let val = this.state.value;

		this.props.onSubmit(val);
	}

	render() {
		return (
			<div className={styles.topbar}>
				<Link to="/"><h1>Home</h1></Link>

				<form onSubmit={this.onSubmitHandler}>
					<input
						type="text"
						placeholder="Enter Location..."
						value={this.state.value}
						onChange={this.onChangeHandler}
					/>
					<input
						type="submit"
						value="Submit"
					/>
				</form>

				<section>
					Fullstack.io
				</section>
			</div>
		)
	}
}