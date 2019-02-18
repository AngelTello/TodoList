import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { Menu, Container } from 'semantic-ui-react';
import SignedInMenu from './Menus/SignedInMenu';

export class NavBar extends Component {
	componentDidMount(state) {
		this.props.fetchUser();
	}

	render() {
		return (
			<Menu inverted fixed="top">
				<Container>
					<Menu.Item as={Link} to="/" header>
						<img src="/assets/logo.png" alt="logo" />
						ToDo List
					</Menu.Item>
					<Menu.Item as={NavLink} to="/todos" name="Todos" />
					{this.props.auth &&
					<SignedInMenu auth={this.props.auth} />}
				</Container>
			</Menu>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
};

export default connect(mapStateToProps, actions)(NavBar);
