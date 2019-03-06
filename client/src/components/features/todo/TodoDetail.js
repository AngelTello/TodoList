import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
	Grid,
	Segment,
	Divider,
	Header,
	List,
	Icon,
	Label,
	Button,
	Menu,
	Dropdown
} from 'semantic-ui-react';
import format from 'date-fns/format';
import { fetchTodo, toggleTodoTask } from '../../../actions';
import LoadingComponent from '../../LoadingComponent';

class TodoDetail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchTodo(id);
	}

	toggleTask = (taskid, status) => {
		const todoId = this.props.todo._id;

		this.props.toggleTodoTask(todoId, taskid, status);
	};

	render() {
		if (this.props.todo && this.props.todo.items) {
			const { _id, title, description, dateDue, items } = this.props.todo;

			return (
				<div>
					<Grid>
						<Grid.Column width={12}>
							<Menu attached="top">
								<Dropdown item icon="wrench" simple>
									<Dropdown.Menu>
										<Dropdown.Item>
											<Icon name="dropdown" />
											<span className="text">New</span>
											<Dropdown.Menu>
												<Dropdown.Item as={Link} to="/todo/new">
													Todo
												</Dropdown.Item>
											</Dropdown.Menu>
										</Dropdown.Item>
										<Dropdown.Item as={Link} to={`/todo/edit/${_id}`}>
											Edit
										</Dropdown.Item>
										<Dropdown.Divider />
										<Dropdown.Header>Export</Dropdown.Header>
										<Dropdown.Item disabled>Share</Dropdown.Item>
									</Dropdown.Menu>
								</Dropdown>
							</Menu>
							<Segment>
								<Label as="a" color="green" ribbon="right">
									<Icon name="checked calendar" />{' '}
									{format(dateDue, 'dddd Do MMM')} at{' '}
									{format(dateDue, 'h:mm A')}
								</Label>
								<Header as="h3" style={{ fontSize: '1.5em' }}>
									{title}
								</Header>
								<p style={{ fontSize: '1.1em' }}>{description}</p>

								<Divider
									as="h4"
									className="header"
									horizontal
									style={{ margin: '3em 0em', textTransform: 'uppercase' }}
								>
									{this.props.todo.items.length > 0
										? 'Tasks'
										: 'No Tasks assigned'}
								</Divider>

								{items.length > 0 && (
									<List selection animated verticalAlign="middle">
										{items.map((item, index) => {
											return (
												<List.Item key={index}>
													<List.Content floated="right">
														<Button
															toggle
															active={item.dateDone === null ? false : true}
															onClick={() =>
																this.toggleTask(
																	item._id,
																	item.dateDone === null ? true : false
																)
															}
															size="small"
															icon
															labelPosition="right"
														>
															<Icon
																name={
																	item.dateDone === null
																		? 'square outline'
																		: 'check square'
																}
															/>
															{item.dateDone === null ? 'Pending...' : 'Done!'}
														</Button>
													</List.Content>
													<List.Icon name="angle right" />
													<List.Content>
														<List.Header>{item.title}</List.Header>
														<List.Description>
															{item.description}
														</List.Description>
													</List.Content>
												</List.Item>
											);
										})}
									</List>
								)}
								<br />
								<Button animated color="yellow" as={Link} to="/todos">
									<Button.Content visible>Back</Button.Content>
									<Button.Content hidden>
										<Icon name="arrow left" />
									</Button.Content>
								</Button>
							</Segment>
						</Grid.Column>
					</Grid>
				</div>
			);
		}

		return <LoadingComponent inverted={false} />;
	}
}

const mapStateToProps = state => {
	return {
		todo: state.todos
	};
};

const actions = { fetchTodo, toggleTodoTask };

export default connect(
	mapStateToProps,
	actions
)(TodoDetail);
