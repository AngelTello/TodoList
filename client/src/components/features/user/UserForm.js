import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import {
	combineValidators,
	isRequired
} from 'revalidate';

// Common Form Controls
import TextInput from '..//../common/form/TextInput';

const validate = combineValidators({
    email: isRequired({ message: 'The e-mail is required' }),
    displayName: isRequired({ message: 'The display name is required' })
})

class UserForm extends Component {
	render() {
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header sub color="teal" content="Add New User" />
						<br />
						<Form>
							<Field
								name="email"
								type="text"
								component={TextInput}
								placeholder="Give your e-mail user"
							/>
							<Field
								name="displayName"
								type="text"
								component={TextInput}
								placeholder="Give your display name user"
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
	form: 'userForm',
    enableReinitialize: true,
    validate
})(UserForm);
