import React, { PropTypes as T } from 'react';

import classnames from 'classnames';
import Map, { Marker } from "google-maps-react";

import styles from './styles.module.css';

export default class MapComponent extends React.Component {
	renderMarkers() {
		console.log('rendering markers...');
		if (!this.props.places) {
			console.log('(Maps.jsx): no places loaded')
			return null;
		}

		return this.props.places.map( place => {
			return <Marker key={place.id}
						name={place.id}
						place={place}
						position={place.geometry.location}
					/>
		})
	}

	render() {
		return (
			<Map google={this.props.google} className={styles.map}>
				{this.renderMarkers()}
			</Map>
		)
	}
}