import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect'
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper'

const userIsAuthenticatedDefaults = {
	authenticatedSelector: state => state.auth !== null,
	wrapperDisplayName: 'UserIsAuthenticated'
};

export const userIsAuthenticated = connectedAuthWrapper(
	userIsAuthenticatedDefaults
);

export const userIsAuthenticatedRedir = connectedRouterRedirect({
	...userIsAuthenticatedDefaults,
	redirectPath: '/'
});