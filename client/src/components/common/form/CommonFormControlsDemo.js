import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {
	composeValidators,
	combineValidators,
	isRequired,
	hasLengthGreaterThan
} from 'revalidate';

// Common Form Controls
import TextInput from './TextInput';
import TextArea from './TextArea';
import SelectInput from './SelectInput';
import DateInput from './DateInput';

const category = [
	{ key: 'drinks', text: 'Drinks', value: 'drinks' },
	{ key: 'culture', text: 'Culture', value: 'culture' },
	{ key: 'film', text: 'Film', value: 'film' },
	{ key: 'food', text: 'Food', value: 'food' },
	{ key: 'music', text: 'Music', value: 'music' },
	{ key: 'travel', text: 'Travel', value: 'travel' }
];

const validate = combineValidators({
	title: isRequired({ message: 'The event title is required' }),
	category: isRequired({ message: 'Please provide a category' }),
	description: composeValidators(
		isRequired({ message: 'Please enter a description' }),
		hasLengthGreaterThan(4)({
			message: 'Description needs to be at least 5 characters'
		})
	)(),
	date: isRequired('date')
});

class CommonFormControlsDemo extends Component {
	render() {
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header sub color="teal" content="Common Form Controls Demo" />
                        <br></br>
						<Form>
							<Field
								name="title"
								type="text"
								component={TextInput}
								placeholder="Give your event a name"
							/>
							<Field
								name="category"
								type="text"
								component={SelectInput}
								options={category}
								placeholder="What is your event about"
							/>
							<Field
								name="description"
								type="text"
								rows={3}
								component={TextArea}
								placeholder="Tell us about your event"
							/>
							<Field
								name="date"
								type="text"
								component={DateInput}
								dateFormat="YYYY-MM-DD HH:mm"
								timeFormat="HH:mm"
								showTimeSelect
								placeholder="Date and Time of event"
							/>
							<Button positive type="submit">
								Submit
							</Button>
							<Button type="button">Cancel</Button>
						</Form>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default reduxForm({
	form: 'formControlsDemo',
	enableReinitialize: true,
	validate
})(CommonFormControlsDemo);
