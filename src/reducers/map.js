import { combineReducers } from 'redux';
import {
	GET_MARKERS_SUCCESS
} from "actions/map";

const allLoaded = (state = false, action) => {
	switch (action.type) {
		case GET_MARKERS_SUCCESS:
			return true;
		// case GET_MARKERS_FAILED:
			// return false;
	}

	return state;
}

export default combineReducers({
	allLoaded
});