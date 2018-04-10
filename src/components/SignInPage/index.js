import React, { Component } from 'react';
import SignInForm from './SignInForm';
import { connect } from 'react-redux';
import { userActions } from '../../actions';
import { SubmissionError } from 'redux-form';
import { userConstants } from '../../constants';

class SignInPage extends Component {

  handleSubmit(values) {
    return this.props.signIn(values.email, values.password)
    .then(res => {

      if (res.type === userConstants.SIGN_IN_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }
    });
  }

  render() {
    return (
      <SignInForm onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

export default connect(null, {
  signIn: userActions.signIn,
})(SignInPage);
