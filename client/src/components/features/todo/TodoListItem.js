import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodoListItem } from '../../../actions';
import { Grid, Table, Button, Icon } from 'semantic-ui-react';
import TodoListItemForm from './TodoListItemForm';

class TodoListItem extends Component {

	onSubmit = values => {
		this.props.onItemAdded(values);
	};

	render() {
		const { active, items } = this.props;

		return (
			<div>
				{active === 'display_add_todolistitem_section' && (
					<TodoListItemForm onSubmit={this.onSubmit} />
				)}

				<Grid.Column width={12}>
					<Table celled>
						<Table.Header>
							<Table.Row>
								<Table.HeaderCell>Title</Table.HeaderCell>
								<Table.HeaderCell>Description</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{items.map((item, index) => (
								<Table.Row key={index}>
									<Table.Cell>{item.title}</Table.Cell>
									<Table.Cell>{item.description}</Table.Cell>
									<Table.Cell textAlign="center">
										<Button icon>
											<Icon name="delete" />
										</Button>
									</Table.Cell>
								</Table.Row>
							))}
						</Table.Body>
					</Table>
				</Grid.Column>
				<br />
				<Button positive type="submit">
					Continue
				</Button>
				<Button type="button" onClick={this.props.onCancel}>
					Cancel
				</Button>
			</div>
		);
	}
}

const actions = {
	addTodoListItem
};

export default connect(
	null,
	actions
)(TodoListItem);
