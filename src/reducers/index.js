import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { user } from './user';
import { chat } from './chat';

const rootReducer = combineReducers({
  user,
  form: form,
  chat: chat,
});

export default rootReducer;
