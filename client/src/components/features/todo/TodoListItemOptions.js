import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TodoListItemOptions = () => {
	return (
		<Button
			as={Link}
			to="/todo/new"
			color="teal"
			fluid
			basic
			content="Add Task"
		/>
	);
};

export default TodoListItemOptions;
