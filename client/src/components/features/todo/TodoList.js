import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllTodos, deleteTodo } from '../../../actions';
import { Grid, Segment, Header, Table, Button, Icon } from 'semantic-ui-react';
import { toastr } from 'react-redux-toastr';
import format from 'date-fns/format';

class TodoList extends Component {
	componentDidMount() {
		this.props.fetchAllTodos();
	}

	confirmRecordDelete = (id, title) => {
		return toastr.confirm(
			`Are you sure you want to delete this element: ${title}?`,
			{
				onOk: () => this.props.deleteTodo(id)
			}
		);
	};

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
								<Table.HeaderCell textAlign="center">Edit</Table.HeaderCell>
								<Table.HeaderCell textAlign="center">Delete</Table.HeaderCell>
							</Table.Row>
						</Table.Header>
						<Table.Body>
							{this.props.todos &&
								this.props.todos.length > 0 &&
								this.props.todos.map((todo, index) => {
									return (
										<Table.Row key={index}>
											<Table.Cell>
												<Link to={`/todo/${todo._id}`}>{todo.title}</Link>
											</Table.Cell>
											<Table.Cell>{todo.description}</Table.Cell>
											<Table.Cell>
												{format(todo.dateDue, 'dddd Do MMM')} at{' '}
												{format(todo.dateDue, 'h:mm A')}
											</Table.Cell>
											<Table.Cell textAlign="center">
												<Button icon as={Link} to={`/todo/edit/${todo._id}`}>
													<Icon name="edit" />
												</Button>
											</Table.Cell>
											<Table.Cell textAlign="center">
												<Button icon>
													<Icon
														name="delete"
														onClick={() =>
															this.confirmRecordDelete(todo._id, todo.title)
														}
													/>
												</Button>
											</Table.Cell>
										</Table.Row>
									);
								})}
							{this.props.todos.length === 0 && (
								<Table.Row>
									<Table.Cell colSpan="5" textAlign="center">
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
		todos: state.todos
	};
};

const actions = {
	fetchAllTodos,
	deleteTodo
};

export default connect(
	mapStateToProps,
	actions
)(TodoList);
