import React from 'react';
import { Button } from 'semantic-ui-react';

const TodoListItemSidebarOptions = ({ onAction, active }) => {
	return (
		<div>
			{active !== 'display_add_todolistitem_section' && (
				<Button
					color="teal"
					fluid
					basic
					content="Add New Task"
					onClick={() => onAction('display_add_todolistitem_section')}
				/>
			)}
			{active === 'display_add_todolistitem_section' && (
				<Button
					fluid
					basic
					content="Cancel"
					onClick={() => onAction('cancel_add_todolistitem_section')}
				/>
			)}
		</div>
	);
};

export default TodoListItemSidebarOptions;
