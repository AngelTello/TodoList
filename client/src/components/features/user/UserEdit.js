import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUser } from '../../../actions';
import UserForm from './UserForm';

class UserEdit extends Component {
	onSubmit = formValues => this.props.addUser(formValues);

	render() {
		return <UserForm onSubmit={this.onSubmit} />;
	}
}

const actions = {
	addUser
};

export default connect(
	null,
	actions
)(UserEdit);
