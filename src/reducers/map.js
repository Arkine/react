import { combineReducers } from 'redux';
import {
	GET_MARKERS_STARTED,
	GET_MARKERS_SUCCESS,
	GET_MARKERS_FAILURE,
} from "actions/map";

export const allLoaded = (state = false, action) => {
	switch (action.type) {
		case GET_MARKERS_STARTED:
			return false;

		case GET_MARKERS_SUCCESS:
			[...state, action.makers]
			return true;

		case GET_MARKERS_FAILED:
			return false;
	}

	return state;
}