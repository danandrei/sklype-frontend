import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';

class ChatWindow extends Component {

  render () {
    return (
      <div className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4 height-100">
        <ChatMessages />
        <ChatInput />
      </div>
    );
  }
}

export default ChatWindow;
