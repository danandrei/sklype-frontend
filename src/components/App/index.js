import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import { history } from '../../helpers/';
import NotFound from './NotFound';
import LandingPage from '../LandingPage';
import SignUpPage from '../SignUpPage';
import SignInPage from '../SignInPage';
import HomePage from '../HomePage';
import { userIsNotAuthenticatedRedir, userIsAuthenticatedRedir} from '../../helpers'
import './index.scss';

class App extends Component {

  render () {
    return (
      <div className="content-wrap">
        <Router history={history}>
          <div className="content">
            <Switch>
              <Route exact path="/" component={userIsNotAuthenticatedRedir(HomePage)} />
              <Route path="/landing" component={userIsAuthenticatedRedir(LandingPage)} />
              <Route path="/signUp" component={userIsAuthenticatedRedir(SignUpPage)} />
              <Route path="/signIn" component={userIsAuthenticatedRedir(SignInPage)} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
