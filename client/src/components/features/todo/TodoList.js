import React, { Component } from 'react';
import { Grid, Segment, Header, Table } from 'semantic-ui-react';

class TodoList extends Component {
	render() {
		return (
			<Grid.Column width={12}>
				<Segment>
					<Header as="h3">ToDo List</Header>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Title</Table.HeaderCell>
								<Table.HeaderCell>Description</Table.HeaderCell>
								<Table.HeaderCell>Due</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
					</Table>
				</Segment>
			</Grid.Column>
		);
	}
}

export default TodoList;
