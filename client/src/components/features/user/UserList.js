import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers, deleteUser } from '../../../actions';
import {
	Segment,
	Grid,
	Header,
	Table,
	Button,
	Icon,
	Label
} from 'semantic-ui-react';
import { toastr } from 'react-redux-toastr';

class UserList extends Component {
	componentDidMount() {
		this.props.fetchAllUsers();
	}

	confirmUserDelete = (id, displayName) => {
		return toastr.confirm(
			`Are you sure you want to delete this user: ${displayName}?`,
			{
				onOk: () => this.props.deleteUser(id)
			}
		);
	};

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
							{this.props.users &&
								this.props.users.length > 0 &&
								this.props.users.map((user, index) => (
									<Table.Row key={index}>
										<Table.Cell>{user.displayName}</Table.Cell>
										<Table.Cell>{user.email}</Table.Cell>
										<Table.Cell textAlign={user.isAdmin ? 'left' : 'center'}>
											{user.isAdmin && (
												<Label color="green" ribbon="right">
													Admin
												</Label>
											)}

											{!user.isAdmin && (
												<Button icon>
													<Icon
														name="delete"
														onClick={() =>
															this.confirmUserDelete(user._id, user.displayName)
														}
													/>
												</Button>
											)}
										</Table.Cell>
									</Table.Row>
								))}
							{this.props.users.length === 0 && (
								<Table.Row>
									<Table.Cell colSpan="4" textAlign="center">
										No records found
									</Table.Cell>
								</Table.Row>
							)}
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
