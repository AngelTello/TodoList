import React from 'react';
import { connect } from 'react-redux';
import { Modal } from 'semantic-ui-react';
import { closeModal } from '../../../actions';
import TodoListItemForm from '../todo/TodoListItemForm';

const EditTodoListItemModal = ({ closeModal }) => {
	return (
		<Modal closeIcon="close" open={true} onClose={closeModal}>
			<Modal.Header>ToDo Task List</Modal.Header>
			<Modal.Content>
				<Modal.Description>
					<TodoListItemForm />
				</Modal.Description>
			</Modal.Content>
		</Modal>
	);
};

const actions = {
	closeModal
};

export default connect(
	null,
	actions
)(EditTodoListItemModal);
