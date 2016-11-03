
export const GET_MARKERS_SUCCESS = "GET_MARKERS_SUCCESS";

export function getMarkersSuccess(markers) {
	return {
		type: GET_MARKERS_SUCCESS,
		markers
	}
}