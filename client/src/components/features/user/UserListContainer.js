import React from 'react';
import { Grid } from 'semantic-ui-react';
import UserList from './UserList';
import UserSidebar from './UserSidebar';

const UserListContainer = () => {
	return (
		<Grid>
			<UserList />
			<UserSidebar />
		</Grid>
	);
};

export default UserListContainer;
