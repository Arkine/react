import { combineReducers } from 'react-redux';

import {
	SUBMIT_LOCATION_STARTED,
	SUBMIT_LOCATION_SUCCESS,
	SUBMIT_LOCATION_FAILURE
} from 'actions/submit-location';


export const locationFound = (state = false, action) => {
	switch (action.type) {
		case SUBMIT_LOCATION_STARTED:
			return false;
		case SUBMIT_LOCATION_SUCCESS:
			return true;
		case SUBMIT_LOCATION_FAILURE:
			return false;
	}

	return state;
}