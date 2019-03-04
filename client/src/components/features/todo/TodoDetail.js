import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	Grid,
	Segment,
	Divider,
	Header,
	List,
	Icon,
	Label,
	Button
} from 'semantic-ui-react';
import format from 'date-fns/format';
import { fetchTodo, toggleTodoTask } from '../../../actions';

class TodoDetail extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;

		this.props.fetchTodo(id);
    }
    
    toggleTask = (taskid, status) => {
        const todoId = this.props.todo._id;
        
        this.props.toggleTodoTask(todoId, taskid, status);
    }

	render() {
		if (this.props.todo && this.props.todo.items) {
			const { title, description, dateDue, items } = this.props.todo;

			return (
				<div>
					<Grid>
						<Grid.Column width={12}>
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
															active={(item.dateDone === null) ? false : true}
                                                            onClick={() => this.toggleTask(item._id, (item.dateDone === null) ? true : false)}
                                                            size="small"
                                                            icon
                                                            labelPosition='right'
														>
                                                            <Icon name={(item.dateDone === null) ?  'square outline' : 'check square'} />
															{(item.dateDone === null) ?  'Pending...' : 'Done!'}
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
							</Segment>
						</Grid.Column>
					</Grid>
				</div>
			);
		}

		return <div>Loading...</div>;
	}
}

const mapStateToProps = state => {
	return {
		todo: state.todos[0]
	};
};

const actions = { fetchTodo, toggleTodoTask };

export default connect(
	mapStateToProps,
	actions
)(TodoDetail);
