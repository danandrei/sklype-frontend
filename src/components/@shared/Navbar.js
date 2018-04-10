import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Navbar extends Component {

  render () {
    return (
      <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="">Sklype</a>
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href="" onClick={this.props.signOut}>Sign out</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default connect(null, {
  signOut: userActions.signOut
})(Navbar);
