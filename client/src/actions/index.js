import axios from 'axios';
import {
	FETCH_USER,
	FETCH_ALL_USERS,
	DELETE_USER,
	FETCH_TODO,
	FETCH_ALL_TODOS,
	DELETE_TODO,
	TOGGLE_TODO_TASK,
	MODAL_OPEN,
	MODAL_CLOSE
} from '../actions/types';
import { toastr } from 'react-redux-toastr';
import history from '../utils/history';

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/session/current_user');

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
		const res = await axios.get(`/api/users/${id}/delete`);

		toastr.success('Success!', 'User deleted');

		dispatch({ type: DELETE_USER, payload: res.data });
	} catch (error) {
		toastr.error('Oops', 'Something went wrong');
	}
};

export const fetchAllTodos = () => async dispatch => {
	const res = await axios.get('/api/todos');

	dispatch({ type: FETCH_ALL_TODOS, payload: res.data });
};

export const fetchTodo = id => async dispatch => {
	const res = await axios.get(`/api/todos/${id}`);

	dispatch({ type: FETCH_TODO, payload: res.data });
};

export const addTodo = values => async dispatch => {
	try {
		await axios.post('/api/todos', values);

		toastr.success('Success!', 'ToDo added');

		history.push('/todos'); // Implementing programmatic navigation
	} catch (error) {
		toastr.error('Oops', 'Problem while trying to add the user');
	}
};

export const deleteTodo = id => async dispatch => {
	try {
		const res = await axios.get(`/api/todos/${id}/delete`);

		toastr.success('Success!', 'ToDo deleted');

		dispatch({ type: DELETE_TODO, payload: res.data });
	} catch (error) {
		toastr.error('Oops', 'Something went wrong');
	}
};

export const toggleTodoTask = (id, taskId, status) => async dispatch => {
	try {
		const res = await axios.get(`/api/todos/${id}/${taskId}/${status}`);

		dispatch({ type: TOGGLE_TODO_TASK, payload: res.data });
	} catch (eror) {
		toastr.error('Oops', 'Something went wrong');
	}
};

// Modal actions
//
export const openModal = (modalType, modalProps) => {
	return {
		type: MODAL_OPEN,
		payload: {
			modalType,
			modalProps
		}
	};
};

export const closeModal = () => {
	return {
		type: MODAL_CLOSE,
		payload: null
	};
};
