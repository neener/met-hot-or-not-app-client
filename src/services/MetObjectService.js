const API_URL = process.env.REACT_APP_API_URL;

const MetObjectService = {
	fetchMetObjects() {
		return fetch(`${API_URL}/metobjects`)
		.then(response => response.json())
	}
}

export default MetObjectService;