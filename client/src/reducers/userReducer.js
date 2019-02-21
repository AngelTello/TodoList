import { FETCH_ALL_USERS, DELETE_USER } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ALL_USERS:
			return action.payload || [];
		case DELETE_USER:
			return state.filter(user => user._id !== action.payload);
		default:
			return state;
	}
}
