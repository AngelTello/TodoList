import { FETCH_ALL_TODOS, DELETE_TODO } from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ALL_TODOS:
			return action.payload || [];
		case DELETE_TODO:
			return state.filter(todo => todo._id !== action.payload);
		default:
			return state;
	}
}
