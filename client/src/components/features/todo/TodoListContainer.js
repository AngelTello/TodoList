import React from 'react';
import { Grid } from 'semantic-ui-react';
import TodoList from './TodoList';
import TodoSidebar from './TodoSidebar';

const TodoListContainer = () => {
	return (
		<Grid>
			<TodoList />
            <TodoSidebar />
		</Grid>
	);
};

export default TodoListContainer;
