import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import CommonFormControlsDemo from './common/form/CommonFormControlsDemo';
import HomePage from './HomePage';
import NavBar from './nav/NavBar';
import Dashboard from './Dashboard';
import UserListContainer from './features/user/UserListContainer';
import NotFound from './NotFound';
import UserEdit from './features/user/UserEdit';
import history from '../utils/history';

class App extends Component {
	render() {
		return (
			<div>
				<Router history={ history }>
					<div>
						<Route exact path="/" component={HomePage} />
						<Route
							path="/(.+)"
							render={() => (
								<div>
									<NavBar />
									<Container className="main">
										<Switch>
											<Route path="/users" component={UserListContainer} />
											<Route path="/user/new" component={withRouter(UserEdit)} />
											<Route path="/todos" component={Dashboard} />
											<Route
												path="/formControls"
												component={withRouter(CommonFormControlsDemo)}
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
