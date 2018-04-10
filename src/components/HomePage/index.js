import React, { Component } from 'react';
import Navbar from '../@shared/Navbar';
import Sidebar from '../Sidebar';
import { connect } from 'react-redux';
import ChatWindow from '../ChatWindow';

class HomePage extends Component {

  render () {
    return (
      <div className="display-flex height-100">
        <Navbar />
        <div className="container-fluid flex-1">
          <div className="row height-100">
            <Sidebar/>
            { this.props.chat.selectedRoom && <ChatWindow />}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    chat: state.chat,
  };
}

export default connect(mapStateToProps, null)(HomePage);
