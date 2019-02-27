import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Segment, Form, Button, Grid, Header } from 'semantic-ui-react';
import { combineValidators, isRequired, composeValidators, matchesPattern } from 'revalidate';

// Common Form Controls
import TextInput from '../../common/form/TextInput';

const validate = combineValidators({
	email: composeValidators(
		isRequired({ message: 'The e-mail is required' }),
		matchesPattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)({
			message: 'The e-mail is not valid'
		})
	)(),
	displayName: isRequired({ message: 'The display name is required' })
});

class UserForm extends Component {
	onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
	};
	
	render() {
		const { invalid, submitting } = this.props;
		
		return (
			<Grid>
				<Grid.Column width={10}>
					<Segment>
						<Header sub color="teal" content="Add New User" />
						<br />
						<Form onSubmit={ this.props.handleSubmit(this.onSubmit) }>
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
							<Button positive type="submit" disabled={invalid || submitting}>
								Save
							</Button>
							<Button type="button" onClick={this.props.history.goBack}>
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
	form: 'userForm',
	enableReinitialize: true,
	validate
})(withRouter(UserForm));
