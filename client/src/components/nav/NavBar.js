import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchUser } from '../../actions';
import { Menu, Container } from 'semantic-ui-react';
import SignedInMenu from './Menus/SignedInMenu';

class NavBar extends Component {
	componentDidMount() {
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
					<Menu.Item as={Link} to="/users" name="Users" />
					<Menu.Item as={Link} to="/todos" name="Todos" />
					{this.props.auth && <SignedInMenu auth={this.props.auth} />}
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

const actions = { fetchUser };

export default connect(
	mapStateToProps,
	actions
)(NavBar);
