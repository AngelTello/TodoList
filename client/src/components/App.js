import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from './HomePage';
import NavBar from './nav/NavBar';
import Dashboard from './Dashboard';
import UserList from './features/user/UserList';
import CommonFormControlsDemo from './common/form/CommonFormControlsDemo';

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
											<Route path="/users" component={UserList} />
											<Route path="/todos" component={Dashboard} />
											<Route path="/formControls" component={withRouter(CommonFormControlsDemo)} />
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
