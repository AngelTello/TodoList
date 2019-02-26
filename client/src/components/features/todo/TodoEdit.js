import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Segment, Grid, Menu } from 'semantic-ui-react';
import { addTodo } from '../../../actions';
import TodoForm from './TodoForm';
import TodoEditReview from './TodoEditReview';
import TodoListItem from './TodoListItem';
import TodoListItemOptions from './TodoListItemOptions';

class TodoEdit extends Component {
	state = {
		activeItem: 'todo',
		todoEdit: null
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	onSubmit = formValues => this.props.addTodo(formValues);

	renderContent() {
		switch (this.state.activeItem) {
			case 'tasks':
				return (
					<div>
						<TodoListItem />
					</div>
				);
			case 'review':
				return <TodoEditReview />;
			default:
				return <TodoForm onSubmit={this.onSubmit} />;
		}
	}

	renderContentOptions() {
		switch (this.state.activeItem) {
			case 'tasks':
				return (
					<Grid.Column width={4}>
						<Segment>
							<TodoListItemOptions />
						</Segment>
					</Grid.Column>
				);
			default:
				return (
					<Grid.Column width={4}>
						<div />
					</Grid.Column>
				);
		}
	}

	render() {
		const { activeItem } = this.state;

		return (
			<Grid>
				<Grid.Column width={12}>
					<Segment>
						<Menu pointing secondary fluid widths={3}>
							<Menu.Item
								name="todo"
								active={activeItem === 'todo'}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								name="tasks"
								active={activeItem === 'tasks'}
								onClick={this.handleItemClick}
							/>
							<Menu.Item
								name="review"
								active={activeItem === 'review'}
								onClick={this.handleItemClick}
							/>
						</Menu>

						{this.renderContent()}
						<br />
						
					</Segment>
				</Grid.Column>
				{this.renderContentOptions()}
			</Grid>
		);
	}
}

const actions = {
	addTodo
};

export default connect(
	null,
	actions
)(TodoEdit);
