import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import { history } from '../../helpers/';
import NotFound from './NotFound';
import LandingPage from '../LandingPage';
import SignUpPage from '../SignUpPage';
import SignInPage from '../SignInPage';
import HomePage from '../HomePage';
import { socketActions } from '../../actions';
import { userIsNotAuthenticatedRedir, userIsAuthenticatedRedir} from '../../helpers'
import './index.scss';

class App extends Component {

  componentDidUpdate (nextProps) {
    if (this.props.user.accessToken) {
      this.props.initSockets(this.props.user.accessToken);
    }
  }

  render() {
    return (
      <Router history={history}>
          <Switch>
            <Route exact path="/" component={userIsNotAuthenticatedRedir(HomePage)} />
            <Route path="/landing" component={userIsAuthenticatedRedir(LandingPage)} />
            <Route path="/signUp" component={userIsAuthenticatedRedir(SignUpPage)} />
            <Route path="/signIn" component={userIsAuthenticatedRedir(SignInPage)} />
            <Route component={NotFound} />
          </Switch>
      </Router>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps, {
  initSockets: socketActions.init,
})(App);
