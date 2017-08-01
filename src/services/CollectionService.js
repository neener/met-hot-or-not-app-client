const CollectionService = {
	fetchCollections() {
		return fetch('/collections')
		.then(response => response.json())
	}
}

export default CollectionService;