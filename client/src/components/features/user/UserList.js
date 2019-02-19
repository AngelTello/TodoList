import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../../actions';
import { Segment, Grid, Header, Table, Menu, Icon } from 'semantic-ui-react';

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
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{this.props.users.map((user, index) => (
							<Table.Row key={index}>
								<Table.Cell>{user.displayName}</Table.Cell>
								<Table.Cell>{user.email}</Table.Cell>
							</Table.Row>
						))}
					</Table.Body>

					<Table.Footer>
						<Table.Row>
							<Table.HeaderCell colSpan="2">
								<Menu floated="right" pagination>
									<Menu.Item as="a" icon>
										<Icon name="chevron left" />
									</Menu.Item>
									<Menu.Item as="a">1</Menu.Item>
									<Menu.Item as="a">2</Menu.Item>
									<Menu.Item as="a">3</Menu.Item>
									<Menu.Item as="a">4</Menu.Item>
									<Menu.Item as="a" icon>
										<Icon name="chevron right" />
									</Menu.Item>
								</Menu>
							</Table.HeaderCell>
						</Table.Row>
					</Table.Footer>
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
	fetchAllUsers
};

export default connect(
	mapStateToProps,
	actions
)(UserList);
