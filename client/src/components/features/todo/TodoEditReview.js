import React from 'react';
import { Divider, Header, List, Button, Icon, Label } from 'semantic-ui-react';
import format from 'date-fns/format';

const TodoEditReview = ({ todo, onContinue, onCancel }) => {
	return (
		<div>
			<Header sub color="teal" content="Please confirm your entries:" />

			<br />
			<Label as="a" color="green" ribbon="right">
				<Icon name="checked calendar" /> {format(todo.dateDue, 'dddd Do MMM')}{' '}
				at {format(todo.dateDue, 'h:mm A')}
			</Label>
			<Header as="h3" style={{ fontSize: '1.5em' }}>
				{todo.title}
			</Header>
			<p style={{ fontSize: '1.1em' }}>{todo.description}</p>

			<Divider
				as="h4"
				className="header"
				horizontal
				style={{ margin: '3em 0em', textTransform: 'uppercase' }}
			>
				{todo.items.length > 0 ? 'Tasks' : 'No Tasks assigned'}
			</Divider>

			{todo.items.length > 0 && (
				<List selection animated verticalAlign="middle">
					{todo.items.map((item, index) => {
						return (
							<List.Item key={index}>
								<List.Icon name="angle right" />
								<List.Content>
									<List.Header>{item.title}</List.Header>
									<List.Description>{item.description}</List.Description>
								</List.Content>
							</List.Item>
						);
					})}
				</List>
			)}

			<br />
			<Button positive type="submit" onClick={onContinue}>
				Continue
			</Button>
			<Button type="button" onClick={onCancel}>
				Cancel
			</Button>
		</div>
	);
};

export default TodoEditReview;
