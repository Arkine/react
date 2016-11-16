import React, { PropTypes as T } from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames';
import { getMarkers } from 'actions/markers';

import Map, { GoogleApiWrapper, Marker } from 'google-maps-react';

import styles from './styles.module.css';

class MapComponent extends React.Component {

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
			return <Marker
						key={place.id}
						name={place.id}
						place={place}
						label={place.name}
						map={this.props.map}
						onClick={this.props.onMarkerClick}
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
				center={this.props.center}
				visible={!children || React.Children.count(children) == 0}
			>

				{this.renderChildren()}
			</Map>
		)
	}
}

MapComponent.propTypes = {
	onMarkerClick: T.func
}

const identity = (...a) => a;

MapComponent.defualtProps = {
	onMarkerClick: identity
}

const mapStateToProps = () => {
	return {};
}

const mapDispatchToProps = (dispatch) => ({
	renderMarkers() {
		dispatch(getMarkers());
	}
})

MapComponent = connect(
	mapStateToProps,
	mapDispatchToProps
)(MapComponent);

export default MapComponent;