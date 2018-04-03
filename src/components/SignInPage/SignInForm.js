import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { history } from '../../helpers/';

const SignInForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <div className="form-wrapper height-100">
      <form class="form-signin" onSubmit={handleSubmit}>
        <div class="text-center mb-4">
          <h1 class="h3 mb-3 font-weight-normal">Sign In</h1>
          <p>Welcome back</p>
        </div>
        <div class="form-label-group">
          <Field
            type="email"
            id="inputEmail"
            class="form-control"
            placeholder="Email address"
            name="email"
            component="input"
          />
          <label for="inputEmail">Email address</label>
        </div>
        <div class="form-label-group">
          <Field
            type="password"
            id="inputPassword"
            class="form-control"
            placeholder="Password"
            name="password"
            component="input"
          />
          <label for="inputPassword">Password</label>
        </div>
        <div className="form-label-group">
          <p>Don't have an account? <a href="" onClick={() => history.push('/signUp')}>Sign Up!</a></p>
        </div>
        {error && <p className="error">{error}</p>}
        <button class="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Sign in</button>
        <p class="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'signIn',
})(SignInForm);
