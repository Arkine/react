export function searchNearby(google, map, request) {
	return new Promise((resolve, reject) => {
		const service = new google.maps.places.PlacesService(map);

		service.nearbySearch(request, (results, status, pagination) => {
			if (status === google.maps.places.PlacesServiceStatus.OK) {
				resolve(results, pagination);
			} else {
				reject(results, status);
			}
		})
	});
}

export function getDetails(google, map, placeId) {
	return new Promise((resolve, reject) => {
		const service = new google.maps.places.PlacesService(map);
		const request = {placeId}

		service.getDetails(request, (place, status) => {
			if (status == google.maps.places.PlacesServiceStatus.OK) {
				resolve(place);
			} else {
				reject(status);
			}
		})
	})
}

export function getLocationCoords(google, address) {
	return new Promise((resolve, reject) => {
		const service = new google.maps.Geocoder();

		service.geocode({'address': address}, (results, status) => {
			console.log('helper: ', results);
			if (status == google.maps.GeocoderStatus.OK) {
				resolve(results);
			} else {
				reject (status);
			}
		})
	})
}