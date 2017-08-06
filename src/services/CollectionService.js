const API_URL = process.env.REACT_APP_API_URL;

const CollectionService = {
	fetchCollections() {
		return fetch(`${API_URL}/collections`)
		.then(response => response.json())
	}
}

export default CollectionService;