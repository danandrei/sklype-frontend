import React, { Component } from 'react';
import SignUpForm from './SignUpForm'

class SignUpPage extends Component {

  handleSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <SignUpForm onSubmit={this.handleSubmit.bind(this)} />
    );
  }
}

export default SignUpPage;
