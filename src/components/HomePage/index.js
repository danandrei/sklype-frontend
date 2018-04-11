import React, { Component } from 'react';
import Navbar from '../@shared/Navbar';
import Sidebar from '../Sidebar';
import { connect } from 'react-redux';
import ChatWindow from '../ChatWindow';

class HomePage extends Component {

  render () {
    return (
      <div className="h-100">
        <Navbar />
        <div className="content">
            <Sidebar/>
            { this.props.chat.selectedRoom && <ChatWindow />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
  };
}

export default connect(mapStateToProps, null)(HomePage);
