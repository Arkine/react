import React, { PropTypes as T } from 'react';

import classnames from 'classnames';
import Map, { GoogleApiWrapper, Marker } from "google-maps-react";

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
		if (!this.props.places) {
			console.log('(Maps.jsx): no places loaded')
			return;
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
		const {children} = this.props;

		return (
			<Map 
				google={this.props.google} 
				className={styles.map}
				map={this.props.map}
				visible={!children || React.Children.count(children) == 0}
			>

				{this.renderChildren()}
			</Map>
		)
	}
}