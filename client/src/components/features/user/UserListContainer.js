import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import UserList from './UserList';
import UserSidebar from './UserSidebar';

export class UserListContainer extends Component {
	render() {
		return (
			<Grid>
				<UserList />
				<UserSidebar />
			</Grid>
		);
	}
}

export default UserListContainer;
