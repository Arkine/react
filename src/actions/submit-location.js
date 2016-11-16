export const SUBMIT_LOCATION_STARTED = "SUBMIT_LOCATION_STARTED";
export const SUBMIT_LOCATION_SUCCESS = "SUBMIT_LOCATION_SUCCESS";
export const SUBMIT_LOCATION_FAILURE = "SUBMIT_LOCATION_FAILURE";

export function sumbitLocationStarted(location: string) {
	return {
		type: SUBMIT_LOCATION_STARTED,
		location: location,
	};
}

export function submitLocationSuccess(location: string) {
	return {
		type: SUBMIT_LOCATION_SUCCESS,
		location: location,
	};
}

export function sumbitLocationFailure() {
	return {
		type: SUBMIT_LOCATION_FAILURE
	};
}

export function submitLocation() {
	return async (dispatch: Function, getState: Function) => {
		dispatch(sumbitLocationStarted());

		try {
			return;
		} catch (error) {
			dispatch(sumbitLocationFailure);

			throw error;
		}
	}
}