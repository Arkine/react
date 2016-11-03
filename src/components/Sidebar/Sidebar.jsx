import React, { PropTypes as T } from 'react';

import Listing from 'components/Listing/Listing';

import classnames from 'classnames';
import styles from './styles.module.css';

export default class Sidebar extends React.Component {
	defaultProps = {
		title: 'Restaurants',
		places: [],
		onListItemClick: () => {}
	}

	onClickHandler = (place, map, google) => {
		if (this.props.onListItemClick) {
			place.place = place;
			this.props.onListItemClick(place, map, google);
		}
	}

	render() {
		return(
			<div className={classnames(styles.sidebar)}>
				<div className={classnames(styles.heading)}>
					<h1>{this.props.title}</h1>
				</div>
				<Listing
					places={this.props.places}
					onClick={this.onClickHandler}
				/>
			</div>
		)
	}
}

Sidebar.propTypes = {
	places: T.array,
	title: T.string,
	onListItemClick: T.func
}