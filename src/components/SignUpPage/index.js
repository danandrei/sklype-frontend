import React, { Component } from 'react';
import { connect } from 'react-redux';
import SignUpForm from './SignUpForm'
import { userActions } from '../../actions';
import { SubmissionError } from 'redux-form';
import { userConstants } from '../../constants';
import { history } from '../../helpers';

class SignUpPage extends Component {

  handleSubmit(values) {
    return this.props.signUp(values)
    .then(res => {

      if (res.type === userConstants.SIGN_UP_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }

      history.push('/signIn');
    });
  }

  render() {
    return (
      <SignUpForm onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

export default connect(null, {
  signUp: userActions.signUp,
})(SignUpPage);
