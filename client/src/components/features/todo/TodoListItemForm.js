import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Form, Button, Divider } from 'semantic-ui-react';
import {
	combineValidators,
	isRequired,
	composeValidators,
	hasLengthLessThan
} from 'revalidate';

// Common Form Controls
import TextInput from '../../common/form/TextInput';

const validate = combineValidators({
	title: composeValidators(
		isRequired({ message: 'Please enter a task name' }),
		hasLengthLessThan(50)({
			message: 'Description needs to be at most 50 characters long'
		})
	)()
});

class TodoListItemForm extends Component {
	onSubmit = formValues => {
		this.props.onSubmit(formValues);

		this.props.reset();
	};

	render() {
		const { invalid, submitting } = this.props;

		return (
			<div>
				<Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
					<Field
						name="title"
						type="text"
						component={TextInput}
						placeholder="Your Task Name"
					/>
					<Field
						name="description"
						type="text"
						component={TextInput}
						placeholder="Description of what you will accomplish and how (optional)"
					/>
					<Button positive type="submit" disabled={invalid || submitting}>
						Add
					</Button>
				</Form>
				<Divider />
			</div>
		);
	}
}

export default reduxForm({
	form: 'todoListItemForm',
	enableReinitialize: true,
	validate
})(withRouter(TodoListItemForm));
