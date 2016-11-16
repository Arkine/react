export const GET_MARKERS_STARTED = "GET_MARKERS_STARTED";
export const GET_MARKERS_SUCCESS = "GET_MARKERS_SUCCESS";
export const GET_MARKERS_FAILURE = "GET_MARKERS_FAILURE";

export function getMarkersStarted() {
	return {
		type: GET_MARKERS_STARTED,
	}
}

export function getMarkersSuccess(markers) {
	return {
		type: GET_MARKERS_SUCCESS,
		markers
	}
}

export function getMarkersFailure() {
	return {
		type: GET_MARKERS_FAILURE,
	}
}


export function getMarkers() {
	return async (dispatch: Function, getState: Function) => {
		dispatch(getMarkersStarted());

		try {
			return;
		} catch(error) {
			dispatch(getMarkersFailure())
			throw error;
		}
	}
}