import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Menu, Container, Button } from 'semantic-ui-react';
import SignedInMenu from './Menus/SignedInMenu';
import SignedOutMenu from './Menus/SignedOutMenu';

class NavBar extends Component {
	render() {
		return (
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item as={Link} to="/" header>
						<img src="/assets/logo.png" alt="logo" />
						ToDo List
					</Menu.Item>
					{this.props.auth && this.props.auth.isAdmin && (
						<Menu.Item as={Link} to="/users" name="Users" />
					)}
					{this.props.auth && <Menu.Item as={Link} to="/todos" name="Todos" />}
					{this.props.auth && (
						<Menu.Item>
							<Button
								as={Link}
								to="/todo/new"
								floated="right"
								positive
								inverted
								content="Add ToDo"
							/>
						</Menu.Item>
					)}
					{this.props.auth ? (
						<SignedInMenu auth={this.props.auth} />
					) : (
						<SignedOutMenu />
					)}
				</Container>
			</Menu>
		);
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth
	};
};

export default connect(
	mapStateToProps,
	null
)(NavBar);
