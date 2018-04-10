import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatRoomList from './ChatRoomList';
import ChatRoomForm from './ChatRoomForm';
import { SubmissionError } from 'redux-form';
import { chatActions } from '../../actions';
import { chatConstants } from '../../constants';

class Sidebar extends Component {

  handleFormSubmit (values) {
    return this.props.createChatRoom(values)
    .then(res => {

      if (res.type === chatConstants.CREATE_CHAT_ROOM_FAIL) {
        throw new SubmissionError({
          _error: res.error.response.data.message,
        });
      }
    });
  }

  render () {
    return (
      <nav className="col-md-2 d-none d-md-block bg-light sidebar">
        <div className="sidebar-sticky">
          <ChatRoomList />
          {this.props.chat.ui.sidebarFormVisible && <ChatRoomForm onSubmit={this.handleFormSubmit.bind(this)}/>}
        </div>
      </nav>
    );
  }
}

function mapStateToProps (state) {
  return {
    chat: state.chat,
  };
}

export default connect(mapStateToProps, {
  createChatRoom: chatActions.createChatRoom,
})(Sidebar);
