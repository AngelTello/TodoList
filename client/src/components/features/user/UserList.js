import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers, deleteUser } from '../../../actions';
import { Segment, Grid, Header, Table, Button, Icon } from 'semantic-ui-react';

class UserList extends Component {
	componentDidMount() {
		this.props.fetchAllUsers();
	}

	render() {
		return (
			<Grid.Column width={12}>
				<Segment>
					<Header as="h3">User List</Header>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Display Name</Table.HeaderCell>
								<Table.HeaderCell>E-Mail</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
							</Table.Row>
						</Table.Header>

						<Table.Body>
							{this.props.users.map((user, index) => (
								<Table.Row key={index}>
									<Table.Cell>{user.displayName}</Table.Cell>
									<Table.Cell>{user.email}</Table.Cell>
									<Table.Cell textAlign="center">
										<Button icon>
											<Icon name="delete" onClick={() => this.props.deleteUser(user._id)} />
										</Button>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</Segment>
			</Grid.Column>
		);
	}
}

const mapStateToProps = state => {
	return {
		users: state.users
	};
};

const actions = {
	fetchAllUsers,
	deleteUser
};

export default connect(
	mapStateToProps,
	actions
)(UserList);
