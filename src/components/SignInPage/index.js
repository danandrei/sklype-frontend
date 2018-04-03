import React, { Component } from 'react';
import SignInForm from './SignInForm';

class SignInPage extends Component {

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <SignInForm onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

export default SignInPage;
