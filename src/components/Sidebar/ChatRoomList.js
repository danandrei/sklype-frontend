import React, { Component } from 'react';
import { connect } from 'react-redux';
import ChatRoomListItem from './ChatRoomListItem';
import { chatActions } from '../../actions';

class ChatRoomList extends Component {

  componentDidMount () {
    this.props.fetchRooms();
  }

  handleAddRoom () {
    if (this.props.chat.ui.sidebarFormVisible) {
      this.props.hideSidebarForm();
    } else {
      this.props.showSidebarForm();
    }
  }

  renderList () {
    return this.props.chat.rooms.map((room) => {
      return (
        <ChatRoomListItem
          key={room._id}
          room={room}
          handleClick={()=> {this.props.selectChatRoom(room._id)}}
        />
      )
    });
  }

  render () {
    return (
      <div>
        <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mb-1 text-muted">
          <span>Chat rooms</span>
          <a className="d-flex align-items-center text-muted" onClick={this.handleAddRoom.bind(this)}>
            <i className="material-icons">add_circle_outline</i>
          </a>
        </h6>
        {!this.props.chat.rooms.length && <span className="nav-link">No rooms available</span>}
        <ul className="nav flex-column mb-2">
          {this.renderList()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    chat: state.chat,
  };
}

export default connect(mapStateToProps, {
  fetchRooms: chatActions.fetchRooms,
  hideSidebarForm: chatActions.hideSidebarForm,
  showSidebarForm: chatActions.showSidebarForm,
  selectChatRoom: chatActions.selectChatRoom,
})(ChatRoomList);
