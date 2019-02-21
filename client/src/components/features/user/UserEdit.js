import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitUser } from '../../../actions';
import UserForm from './UserForm';

class UserEdit extends Component {
	onSubmit = formValues => this.props.submitUser(formValues);

	render() {
		return <UserForm onSubmit={this.onSubmit} />;
	}
}

const actions = {
	submitUser
};

export default connect(
	null,
	actions
)(UserEdit);
