import { combineReducers } from 'redux'
import metObjectReducer from './metObjectReducer'

export default combineReducers({
	recent: metObjectReducer
})