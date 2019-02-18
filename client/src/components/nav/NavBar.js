import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { Menu, Container } from 'semantic-ui-react';
import SignedInMenu from './Menus/SignedInMenu';

export class NavBar extends Component {
	render() {
		return (
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item as={Link} to="/" header>
						<img src="/assets/logo.png" alt="logo" />
						ToDo List
					</Menu.Item>
					<Menu.Item as={NavLink} to="/todos" name="Todos" />
					<SignedInMenu />
				</Container>
			</Menu>
		);
	}
}

export default withRouter(NavBar);
