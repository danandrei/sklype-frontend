import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { history } from '../../helpers/';
import TextField from '../@shared/TextField';

const SignInForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <div className="form-wrapper h-100">
      <form className="form-signin" onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
          <p>Welcome back</p>
        </div>
        <Field
          id="inputEmail"
          type="email"
          label="Email address"
          name="email"
          component={TextField}
        />
        <Field
          id="inputPassword"
          type="password"
          label="Password"
          name="password"
          component={TextField}
        />
        {error && <p className="error">{error}</p>}
        <div className="form-label-group">
          <p>Don't have an account? <a href="" onClick={() => history.push('/signUp')}>Sign Up!</a></p>
        </div>
        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Sign in</button>
        <p className="mt-5 mb-3 text-muted text-center">&copy; 2017-2018</p>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'signIn',
})(SignInForm);
