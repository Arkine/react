export const GET_PLACE_INFO_STARTED = 'GET_PLACE_INFO_STARTED';
export const GET_PLACE_INFO_SUCCESS = 'GET_PLACE_INFO_SUCCESS';
export const GET_PLACE_INFO_FAILURE = 'GET_PLACE_INFO_FAILURE';

export function getPlaceInfoStarted() {
	return {
		type: GET_PLACE_INFO_STARTED,
	};
}

export function getPlaceInfoSuccess() {
	return {
		type: GET_PLACE_INFO_SUCCESS,
	};
}

export function getPlaceInfoFailure() {
	return {
		type: GET_PLACE_INFO_FAILURE,
	};
}

export function getPlaceInfo() {
	return async (dispatch: Function, getState: Function) => {
		dispatch(getPlaceInfoStarted());

		try {
			return;
		} catch(error) {
			dispatch(getPlaceInfoFailure());

			throw error;
		}
	}
}