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

      this.props.hideSidebarForm();
    });
  }

  render () {
    return (
      <nav className="sidebar">
        <div className="sidebar-content">
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
  hideSidebarForm: chatActions.hideSidebarForm,
})(Sidebar);
