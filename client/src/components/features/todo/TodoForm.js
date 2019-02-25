import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {
	combineValidators,
	isRequired,
	composeValidators,
	hasLengthLessThan
} from 'revalidate';
import moment from 'moment';

// Common Form Controls
import TextInput from '../../common/form/TextInput';
import DateInput from '../../common/form/DateInput';

const validate = combineValidators({
	title: composeValidators(
		isRequired({ message: 'Please enter a title' }),
		hasLengthLessThan(50)({
			message: 'Title needs to be at most 50 characters long'
		})
	)(),
	dateDue: isRequired('date')
});

class TodoForm extends Component {
	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	};

	render() {
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header sub color="teal" content="Add New ToDo" />
						<br />
						<Form onSubmit={ this.props.handleSubmit(this.onSubmit) }>
							<Field
								name="title"
								type="text"
								component={TextInput}
								placeholder="Your New Todo Title"
							/>
							<Field
								name="description"
								type="text"
								component={TextInput}
								placeholder="Show description of what you will accomplish and how (optional)"
							/>
							<Field
								name="dateDue"
								type="text"
								component={DateInput}
								dateFormat="YYYY-MM-DD HH:mm"
                                timeFormat="HH:mm"
                                minDate={moment()}
                                maxDate={moment().add(3, 'month') }
								showTimeSelect
								placeholder="Due date"
							/>
							<Button positive type="submit">
								Continue
							</Button>
							<Button type="button" onClick={() => this.props.history.push('/todos')}>
								Cancel
							</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default reduxForm({
	form: 'todoForm',
	enableReinitialize: true,
	validate
})(withRouter(TodoForm));
