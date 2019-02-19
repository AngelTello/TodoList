import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import CommonFormControlsDemo from './common/form/CommonFormControlsDemo';
import HomePage from './HomePage';
import NavBar from './nav/NavBar';
import Dashboard from './Dashboard';
import UserListContainer from './features/user/UserListContainer';
import UserForm from './features/user/UserForm';
import NotFound from './NotFound';

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
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
											<Route path="/user/new" component={withRouter(UserForm)} />
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
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
