import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';

import 'semantic-ui-css/semantic.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';

const store = configureStore();

const renderApp = () => {
	ReactDOM.render(
		<Provider store={store}>
			<div>
				<ReduxToastr
					position="bottom-right"
					transitionIn="fadeIn"
					transitionOut="fadeOut"
				/>
				<App />
			</div>
		</Provider>,
		document.getElementById('root')
	);
};

// Hot Module Replacement API
if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./components/App', renderApp);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
