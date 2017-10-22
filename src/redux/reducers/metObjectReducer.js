function metObjectReducer(state={}, action){
	switch (action.type) {
		case 'ADD_METOBJECT':
			return [...state, action.metobject];
		default:
		return state;
	}
}

export default metObjectReducer