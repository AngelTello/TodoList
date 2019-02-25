import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const TodoSidebar = () => {
	return (
		<Grid.Column width={4}>
			<Segment>
				<Button
					as={Link}
					to="/todo/new"
					color="teal"
					fluid
					basic
					content="Add ToDo"
				/>
			</Segment>
		</Grid.Column>
	);
};

export default TodoSidebar;
