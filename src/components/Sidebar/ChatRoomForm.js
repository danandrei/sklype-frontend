import React from 'react';

import { Field, reduxForm } from 'redux-form';
import TextField from '../@shared/TextField';

const ChatRoomForm = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <div className="sidebar-form-wrapper">
      <form onSubmit={handleSubmit}>
        <Field
          id="inputRoomName"
          type="name"
          label="Room name"
          name="name"
          component={TextField}
        />
        {error && <p className="error">{error}</p>}
        <button className="btn btn-lg btn-primary btn-block" type="submit" disabled={submitting}>Add</button>
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'chatRoomForm'
})(ChatRoomForm);
