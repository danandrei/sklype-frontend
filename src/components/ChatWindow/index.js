import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatInput from './ChatInput';
import ChatMessages from './ChatMessages';
import { chatActions } from '../../actions';

class ChatWindow extends Component {

  handleMessageSubmit(values) {
    this.props.sendRoomMessage(this.props.chat.selectedRoom, values.message)
  }

  render () {
    return (
      <div className="chat-wrapper">
        <ChatMessages />
        <ChatInput onSubmit={this.handleMessageSubmit.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
  }
}

export default connect(mapStateToProps, {
  sendRoomMessage: chatActions.sendRoomMessage,
})(ChatWindow);
