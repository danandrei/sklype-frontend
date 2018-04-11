import React from 'react';

import { Field, reduxForm, reset } from 'redux-form';
import TextField from '../@shared/TextField';

const ChatInput = props => {
  const { error, handleSubmit, submitting } = props;
  return (
    <div className="chat-input-wrapper">
      <form
        onSubmit={handleSubmit}
        autocomplete="off"
      >
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

const afterSubmit = (result, dispatch) => {
  dispatch(reset('chatInputForm'));
}

export default reduxForm({
  form: 'chatInputForm',
  onSubmitSuccess: afterSubmit,
})(ChatInput);
