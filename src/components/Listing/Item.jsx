import React, { PropTypes as T} from 'react';

import classnames from 'classnames';

import Rating from 'components/Rating/Rating';
import styles from './styles.module.css';

export default class Item extends React.Component {
	defaulyProps = {
		onHighlight: () => {},
		offHighlight: () => {}
	}

	state = {
		hovered: false
	}

	onClickHandler = (e) => {
		this.props.onClick(this.props.place);
	}

	render() {
		const {place} = this.props;

		return (
			<div 
				className={styles.item}
				onClick={this.onClick}
			>
				<h1 className={classnames(styles.title)}>{place.name}</h1>
				<Rating className={styles.rating}
						percentage={(place.rating/5)} 
				/>
			</div>
		)
	}
}

Item.propTypes = {
	place: T.object.isRequired,
	onHighlight: T.func,
}
