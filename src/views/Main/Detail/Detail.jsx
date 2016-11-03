import React, { PropTypes as T } from 'react';

import {getDetails} from 'utils/googleApiHelpers';

import styles from './styles.module.css';
import InfoBox from  '../InfoBox/InfoBox';

export default class Detail extends React.Component {
	state = {
		place: {},
		location: {},
		loading: true
	}

	componentDidUpdate(prevProps) {
		if (this.props.map &&
			(prevProps.map !== this.props.map ||
			prevProps.params.placeId !== this.props.params.placeId)) {
				this.getDetails(this.props.map);
		}
	}

	componentDidMount() {

		if (this.props.map) {
			this.getDetails(this.props.map);
		}
	}

	getDetails(map) {
		const {google, params} = this.props;
		const {placeId} = params;

		this.setState({loading: true}, () => {
			getDetails(google, map, placeId)
			.then( place => {
				console.log('place: ', place);
				const {location} = place.geometry;
				const loc = {
					lat: location.lat(),
					lng: location.lng()
				}

				this.setState({
					place,
					location: loc,
					loading: false
				});
			})
		});
	}

	renderPhotos(place) {
		if (!place.photos || place.photos.length === 0) return;

		const cfg = {maxWidth: 100, maxHeight: 100}
		    return (
		    	<div className={styles.photoStrip}>
		    		{place.photos.map(p => {
		    			const url = `${p.getUrl(cfg)}.png`;

						return (<img key={url} src={url} />)
		      		})};
		      	</div>
		    );
	}

	render() {
		if (this.state.loading) {
			return(<div className={styles.wrapper}>Loading...</div>);
		}

		const {place} = this.state;
		return (
			<div className={styles.wrapper}>
				<div className={styles.header}>
					<h2>{place.name}</h2>
				</div>
				<div className={styles.details}>
					{this.renderPhotos(place)}
				</div>

				<InfoBox place={this.state.place}/>
			</div>
		)
	}
}
