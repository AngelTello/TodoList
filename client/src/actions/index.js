import axios from 'axios';
import { FETCH_USER, FETCH_ALL_USERS, DELETE_USER } from '../actions/types';
import { toastr } from 'react-redux-toastr';
import history from '../utils/history';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAllUsers = () => async dispatch => {
	const res = await axios.get('/api/users');

	dispatch({ type: FETCH_ALL_USERS, payload: res.data });
};

export const addUser = values => async dispatch => {
	try {
		await axios.post('/api/users', values);

		toastr.success('Success!', 'User added');

		history.push('/users'); // Implementing programmatic navigation
	} catch (error) {
		toastr.error('Oops', 'Problem while trying to add the user');
	}
};

export const deleteUser = id => async dispatch => {
	try {
		const res = await axios.get(`/api/users/${id}`);

		toastr.success('Success!', 'User deleted');

		dispatch({ type: DELETE_USER, payload: res.data });
	} catch (error) {
		toastr.error('Oops', 'Something went wrong');
	}
};
