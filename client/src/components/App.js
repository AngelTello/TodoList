import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { fetchUser } from '../actions';
import { Container } from 'semantic-ui-react';
import CommonFormControlsDemo from './common/form/CommonFormControlsDemo';
import LandingPage from './LandingPage';
import NavBar from './nav/NavBar';
import HomePage from './HomePage';
import UserListContainer from './features/user/UserListContainer';
import NotFound from './NotFound';
import UserEdit from './features/user/UserEdit';
import { userIsAuthenticatedRedir } from '../utils/authWrapper';
import history from '../utils/history';
import ModalManager from './features/modals/ModalManager';
import UserNotValid from './features/user/UserNotValid';
import TodoListContainer from './features/todo/TodoListContainer';
import TodoEdit from './features/todo/TodoEdit';
import TodoDetail from './features/todo/TodoDetail';

class App extends Component {
	componentWillMount() {
		this.props.fetchUser();
	}

	render() {
		return (
			<div>
				<ModalManager />
				<Router history={history}>
					<div>
						<Route exact path="/" component={LandingPage} />
						<Route
							path="/(.+)"
							render={() => (
								<div>
									<NavBar />
									<Container className="main">
										<Switch>
											<Route exact path="/home" component={HomePage} />
											<Route
												path="/users"
												component={userIsAuthenticatedRedir(UserListContainer)}
											/>
											<Route
												path="/user/new"
												component={userIsAuthenticatedRedir(
													withRouter(UserEdit)
												)}
											/>
											<Route
												path="/todos"
												component={userIsAuthenticatedRedir(TodoListContainer)}
											/>
											<Route
												path="/todo/new"
												component={userIsAuthenticatedRedir(
													withRouter(TodoEdit)
												)}
											/>
											<Route
												path="/todo/edit/:id"
												component={userIsAuthenticatedRedir(
													withRouter(TodoEdit)
												)}
											/>
											<Route
												path="/todo/:id"
												component={userIsAuthenticatedRedir(TodoDetail)}
											/>
											<Route
												path="/formControls"
												component={withRouter(CommonFormControlsDemo)}
											/>
											<Route path="/usernotvalid" component={UserNotValid} />
											<Route path="/error" component={NotFound} />
											<Route component={NotFound} />
										</Switch>
									</Container>
								</div>
							)}
						/>
					</div>
				</Router>
			</div>
		);
	}
}

const actions = { fetchUser };

export default connect(
	null,
	actions
)(App);
