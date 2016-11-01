import React, { PropTypes as T } from 'react';

import classnames from 'classnames';
import Map, { Marker } from "google-maps-react";

import styles from './styles.module.css';

export default class MapComponent extends React.Component {

	renderChildren() {
		const {children} = this.props;

		if (React.Children.count(children) > 0) {
			return React.Children.map(children, c => {
				return React.cloneElement(c, this.props, {
					map: this.props.map,
					google: this.props.google
				})
			})
		} else {
			return this.renderMarkers();
		}
	}

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
						onClick={this.props.onMarkerClick.bind(this)}
						position={place.geometry.location}
					/>
		})
	}

	render() {
		if (React.Children.count(this.props.children) > 0) {
			return(
				<div>
					{this.renderChildren()}
				</div>
			);
		}

		return (
			<Map google={this.props.google} className={styles.map}>
				{this.renderChildren()}
			</Map>
		)
	}
}