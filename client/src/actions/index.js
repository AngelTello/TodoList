import axios from 'axios';
import { FETCH_USER, FETCH_ALL_USERS } from '../actions/types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');

    dispatch({ type: FETCH_USER, payload: res.data });
}

export const fetchAllUsers = () => async dispatch => {
    const res = await axios.get('/api/users');

    dispatch({ type: FETCH_ALL_USERS, payload: res.data });
};