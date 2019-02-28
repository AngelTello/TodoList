import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Segment, Grid, Menu } from 'semantic-ui-react';
import TodoForm from './TodoForm';
import TodoEditReview from './TodoEditReview';
import TodoListItem from './TodoListItem';
import TodoListItemSidebarOptions from './TodoListItemSidebarOptions';
import { toastr } from 'react-redux-toastr';

class TodoEdit extends Component {
	state = {
		todo: null,
		tabs: [
			{ name: 'todo', active: true, disabled: false },
			{ name: 'tasks', active: false, disabled: true },
			{ name: 'review', active: false, disabled: true }
		],
		activeTabItem: 'todo',
		activeContentOptionAction: null
	};

	handleTabItemClick = (e, { name }) => this.setActiveTabItem(name);
	setActiveTabItem = name => {
		this.setState({ activeTabItem: name });
	};
	enableTabItem = name => {
		var tabs = this.state.tabs;
		const tab = tabs.find(tab => tab.name === name && tab.disabled);

		if (tab) {
			// Enable
			tab.disabled = false;

			// Store
			this.setState({ tabs });
		}
	};

	handleContentOptionAction = action =>
		this.setState({ activeContentOptionAction: action });

	storeTodoFormValuesAndContinue = values => {
		const todo = { ...values, items: [] };

		// Store
		this.setState({ todo });

		// Continue
		const nextTabItem = 'tasks';

		this.enableTabItem(nextTabItem);
		this.setActiveTabItem(nextTabItem);
	};

	addTodoListItem = values => {
		// Adding an element to and array
		var items = [...this.state.todo.items, values];

		// Opdating a property in the object
		var todo = { ...this.state.todo, items: items };

		// Store
		this.setState({ todo });
	};

	onContinue = currentActiveTab => {
		if (currentActiveTab === this.state.tabs[2].name) {
			// This is the "review" so once the user clicks continue we will post to our server side
			this.submitTodo();
		} else {
			// Continue
			const nextTabItem = 'review';

			this.enableTabItem(nextTabItem);
			this.setActiveTabItem(nextTabItem);
		}
	};

	submitTodo = () => {
		console.log(this.state.todo);
	};

	onCancelProcess = () => {
		toastr.confirm(
			'Are you sure you want to cancel this process? ...your unsave changes will be lost',
			{
				onOk: () => this.props.history.push('/todos')
			}
		);
	};

	renderContent() {
		switch (this.state.activeTabItem) {
			case this.state.tabs[1].name:
				return (
					<TodoListItem
						items={
							this.state.todo && this.state.todo.items
								? this.state.todo.items
								: []
						}
						active={this.state.activeContentOptionAction}
						onItemAdded={this.addTodoListItem}
						onContinue={() => this.onContinue(this.state.activeTabItem)}
						onCancel={this.onCancelProcess}
					/>
				);
			case this.state.tabs[2].name:
				return (
					<TodoEditReview
						todo={this.state.todo}
						onContinue={() => this.onContinue(this.state.activeTabItem)}
						onCancel={this.onCancelProcess}
					/>
				);
			default:
				return (
					<TodoForm
						onSubmit={this.storeTodoFormValuesAndContinue}
						onCancel={this.onCancelProcess}
					/>
				);
		}
	}

	renderContentOptions() {
		switch (this.state.activeTabItem) {
			case this.state.tabs[1].name:
				return (
					<Grid.Column width={4}>
						<Segment>
							<TodoListItemSidebarOptions
								onAction={action => this.handleContentOptionAction(action)}
								active={this.state.activeContentOptionAction}
							/>
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
		const { activeTabItem } = this.state;

		return (
			<Grid>
				<Grid.Column width={12}>
					<Segment>
						<Menu pointing secondary fluid widths={3}>
							{this.state.tabs.map((tab, index) => {
								return (
									<Menu.Item
										key={index}
										name={tab.name}
										active={activeTabItem === tab.name}
										disabled={tab.disabled}
										onClick={this.handleTabItemClick}
									/>
								);
							})}
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

export default reduxForm({
	form: 'todoForm'
})(TodoEdit);
