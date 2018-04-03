import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

export const adminIsAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.auth.user !== null,
  wrapperDisplayName: 'AdminIsAuthenticated',
});

export const adminIsNotAuthenticated = connectedAuthWrapper({
  authenticatedSelector: state => state.auth.user === null,
  wrapperDisplayName: 'AdminIsNotAuthenticated',
});

export const adminIsNotAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.auth.user !== null,
  wrapperDisplayName: 'AdminIsNotAuthenticated',
  redirectPath: '/login',
  allowRedirectBack: false,
});

export const adminIsAuthenticatedRedir = connectedRouterRedirect({
  authenticatedSelector: state => state.auth.user === null,
  wrapperDisplayName: 'AdminIsAuthenticated',
  redirectPath: '/',
});
