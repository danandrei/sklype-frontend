import React from 'react';

import { Field, reduxForm } from 'redux-form';
import TextField from '../@shared/TextField';

const ChatInput = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <div className="chat-input-wrapper">
      <form onSubmit={handleSubmit}>
        <Field
          id="inputChatMessage"
          type="text"
          label="Message"
          name="message"
          component={TextField}
        />
      </form>
    </div>
  );
};

export default reduxForm({
  form: 'chatInputForm'
})(ChatInput);
