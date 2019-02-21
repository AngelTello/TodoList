import axios from 'axios';
import { FETCH_USER, FETCH_ALL_USERS, DELETE_USER } from '../actions/types';
import history from '../utils/history';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user');

	dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchAllUsers = () => async dispatch => {
	const res = await axios.get('/api/users');

	dispatch({ type: FETCH_ALL_USERS, payload: res.data });
};

export const submitUser = values => async dispatch => {
	try {
		await axios.post('/api/users', values);

		history.push('/users'); // Implementing programmatic navigation
	} catch (error) {
		console.log('Oops there was an error in your request');
	}
};

export const deleteUser = id => async dispatch => {
	try {
        const res = await axios.get(`/api/users/${id}`);
        
        dispatch({ type: DELETE_USER, payload: res.data });
	} catch (error) {
		console.log('Oops there was an error in your request');
	}
};
