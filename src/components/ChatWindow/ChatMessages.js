import React, { Component } from 'react';
import { connect } from 'react-redux';

class ChatMessages extends Component {

  componentDidMount() {
    this.scrollToBottom();
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.chat.selectedRoom !== this.props.chat.selectedRoom ||
      prevProps.chat.messages !== this.props.chat.messages
    ) {
      this.scrollToBottom()
    }
  }

  scrollToBottom() {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  renderMessages() {
    return this.props.chat.messages.map((message) => {
      return (
        <div
          className="chat-message"
          key={message._id}
        >
          <strong>{message.user.firstName + ' ' + message.user.lastName + ':'} </strong> {message.message}
        </div>
      )
    });
  }

  render () {
    return (
      <div className="chat-messages">
        {this.renderMessages()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
  }
}

export default connect(mapStateToProps, {})(ChatMessages);
