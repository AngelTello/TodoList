import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr';
import authReducer from './authReducer';
import userReducer from './userReducer';
import modalReducer from './modalReducer';

export default combineReducers({
	auth: authReducer,
	users: userReducer,
	form: reduxForm,
	// ... other reducers ...
	modals: modalReducer,
	toastr: toastrReducer // <- Mounted at toastr.
});
