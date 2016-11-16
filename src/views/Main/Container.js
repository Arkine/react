import React from 'react';
import Map, { GoogleApiWrapper } from 'google-maps-react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { searchNearby, getLocationCoords } from 'utils/googleApiHelpers';

import { submitLocation } from 'actions/submit-location';

import Header from 'components/Header/Header';
import Sidebar from 'components/Sidebar/Sidebar';

import styles from './styles.module.css';

export class Container extends React.Component {

	state = {
		places: [],
		pagination: null,
		map: null,
		location: null,
		center: {},
	}

	onReady = (mapProps, map) => {
		const {google} = this.props;

		this.setState({
			map: map,
			center: map.center,
		});

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

	// componentDidUpdate(prevProps, prevState) {
	// 	if (!this.state.center) {
	// 		return;
	// 	}

	// 	this.state.map.setCenter(this.state.center);
	// }

	onMarkerClick = (item) => {
		const {place} = item;
		const {push} = this.props.router;

		push(`/map/detail/${place.place_id}`);
	}

	submitLocation = (address) => {
		let {google} = this.props;
		let map = this.state.map;

		getLocationCoords(google, address)
			.then((results) => {
				this.setState({
					center: results[0].geometry.location
				});
			}).catch((status, result) => {
				console.log('There was an error', status)
			})


		console.log(map);
		console.log('google: ', google);
		// console.log('state: ', this.state);
		// const opts = {
		// 	location: {center: {lat: -34.397, lng: 150.644}},
		// 	radius: '50000',
		// 	types: ['cafe']
		// }

		// searchNearby(google, map, opts)
		// 	.then((results, pagination) => {
		// 		this.setState({
		// 			places: results,
		// 			pagination
		// 		})
		// 	})
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
					onMarkerClick: this.onMarkerClick
				});
		}

		return(
			<Map
				google={this.props.google}
				onReady={this.onReady}
				center={this.state.center}
				className={styles.wrapper}
				visible={!children || React.Children.count(children) == 0}
			>
				<Header onSubmit={this.submitLocation}/>

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

const mapStateToProps = (state) => ({
	places: state.places,
	location: state.location,
});

const mapDispatchToProps = (dispatch) =>({
	submitLocation() {
		dispatch(submitLocation(state.location));
	}
});

Container = GoogleApiWrapper({
	apiKey: __GAPI_KEY__
})(Container);

Container = withRouter(Container);

Container = connect(
	mapStateToProps,
	mapDispatchToProps
)(Container);

export default Container;
