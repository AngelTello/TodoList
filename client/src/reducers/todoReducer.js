import {
	FETCH_ALL_TODOS,
	FETCH_TODO,
	DELETE_TODO,
	TOGGLE_TODO_TASK
} from '../actions/types';

export default function(state = [], action) {
	switch (action.type) {
		case FETCH_ALL_TODOS:
			return action.payload || [];
		case FETCH_TODO:
		case TOGGLE_TODO_TASK:
			return action.payload || null;
		case DELETE_TODO:
			return state.filter(todo => todo._id !== action.payload);
		default:
			return state;
	}
}
