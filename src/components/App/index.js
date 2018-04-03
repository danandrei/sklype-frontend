import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router, Route, Redirect, Switch } from 'react-router-dom';

import { history } from '../../helpers/';
import NotFound from './NotFound';
import { } from '../../helpers'
import './index.scss';

class App extends Component {

  render () {
    return (
      <div className="content-wrap">
        <Router history={ history }>
          <div className="content">
            <Switch>
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
