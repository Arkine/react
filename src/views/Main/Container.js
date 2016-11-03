import React from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';

import { searchNearby } from 'utils/googleApiHelpers';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

import styles from './styles.module.css';

export class Container extends React.Component {

	state = {
		places: [],
		pagination: null
	}

	onReady = (mapProps, map) => {
		const {google} = this.props;

		const opts = {
			location: map.center,
			radius: '50000',
			types: ['cafe']
		}

		searchNearby(google, map, opts)
			.then((results, pagination) => {
				this.setState({
					places: results,
					pagination
				})
			}).catch((status, result) => {
				console.log('There was an error: ', status)
			})
	}

	onMarkerClick = (item) => {
		const {place} = item;
		const {push} = this.context.router;
		push(`/map/detail/${place.place_id}`);
	}

	render() {
		let children = null;

		if (this.props.children) {

			children = React.cloneElement(
				this.props.children,
				{
					google: this.props.google,
					places: this.state.places,
					loaded: this.props.loaded,
					router: this.context.router,
					onMarkerClick: this.onMarkerClick

				});
		}

		return(
			<Map
				google={this.props.google}
				onReady={this.onReady}
				className={styles.wrapper}
				visible={false}
				visible={!children || React.Children.count(children) == 0}
			>
				<Header />
				<Sidebar
					title={'Restaurants'}
					places={this.state.places}
					onListItemClick={this.onMarkerClick}
				/>
				<div className={styles.content}>
					{children}
				</div>
			</Map>

		);
	}
}

Container.contextTypes = {
	router: React.PropTypes.object
}

export default GoogleApiWrapper({
	apiKey: __GAPI_KEY__
})(Container);