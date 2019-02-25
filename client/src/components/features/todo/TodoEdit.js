import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../../../actions';
import TodoForm from './TodoForm';

class TodoEdit extends Component {
	onSubmit = formValues => this.props.addTodo(formValues);

	render() {
		return <TodoForm onSubmit={this.onSubmit} />;
	}
}

const actions = {
	addTodo
};

export default connect(
	null,
	actions
)(TodoEdit);
