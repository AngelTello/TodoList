import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoListItem } from '../../../actions';
import { Button } from 'semantic-ui-react';
import TodoListItemForm from './TodoListItemForm';

class TodoListItem extends Component {
	onSubmit = formValues => this.props.addTodoListItem(formValues);

	render() {
		const { active } = this.props;

		return (
			<div>
				{active === 'display_add_todolistitem_section' && (
					<TodoListItemForm onSubmit={this.onSubmit} />
				)}

				<Button positive type="submit">
					Continue
				</Button>
				<Button type="button" onClick={this.props.onCancel}>
					Cancel
				</Button>
			</div>
		);
	}
}

const actions = {
	addTodoListItem
};

export default connect(
	null,
	actions
)(TodoListItem);
