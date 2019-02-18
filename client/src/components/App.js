import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import HomePage from './HomePage';
import NavBar from './nav/NavBar';
import Dashboard from './Dashboard';

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
									<BrowserRouter>
										<Route exact path="/todos" component={Dashboard} />
									</BrowserRouter>
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
