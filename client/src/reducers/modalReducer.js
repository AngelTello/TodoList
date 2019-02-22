import { MODAL_OPEN, MODAL_CLOSE } from '../actions/types';

export default function(state = null, action) {
	switch (action.type) {
		case MODAL_OPEN:
			return action.payload || null;
		case MODAL_CLOSE:
			return action.payload;
		default:
			return state;
	}
}
