import React, { Component } from 'react';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Navbar extends Component {

  render () {
    return (
      <nav className="navbar navbar-dark bg-dark p-0">
        <a className="navbar-brand col" href="">Sklype</a>
        <ul className="navbar-nav col px-3">
          <li className="nav-item text-right">
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
