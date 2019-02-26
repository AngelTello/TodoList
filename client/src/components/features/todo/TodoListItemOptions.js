import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { openModal } from '../../../actions';

const TodoListItemOptions = ({ openModal }) => {
	return (
		<Button
			color="teal"
			fluid
			basic
			content="Add Task"
			onClick={() => openModal('EditTodoListItemModal')}
		/>
	);
};

const actions = { openModal };

export default connect(
	null,
	actions
)(TodoListItemOptions);
