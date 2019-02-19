import React from 'react';
import { Button, Grid, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const UserSidebar = () => {
	return (
		<Grid.Column width={4}>
			<Segment>
				<Button
					as={Link}
					to="/user/new"
					color="teal"
					fluid
					basic
					content="Add New User"
				/>
			</Segment>
		</Grid.Column>
	);
};

export default UserSidebar;
