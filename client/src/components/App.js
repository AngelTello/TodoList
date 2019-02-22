import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import CommonFormControlsDemo from './common/form/CommonFormControlsDemo';
import StartPage from './StartPage';
import NavBar from './nav/NavBar';
import HomePage from './HomePage';
import UserListContainer from './features/user/UserListContainer';
import NotFound from './NotFound';
import UserEdit from './features/user/UserEdit';
import { userIsAuthenticatedRedir } from '../utils/authWrapper';
import history from '../utils/history';
import TodoList from './features/todo/TodoList';
import ModalManager from './common/modals/ModalManager';

class App extends Component {
	render() {
		return (
			<div>
				<ModalManager />
				<Router history={history}>
					<div>
						<Route exact path="/" component={StartPage} />
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
												component={userIsAuthenticatedRedir(TodoList)}
											/>
											<Route
												path="/formControls"
												component={userIsAuthenticatedRedir(
													withRouter(CommonFormControlsDemo)
												)}
											/>
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

export default App;
