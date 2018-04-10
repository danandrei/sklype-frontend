import React from 'react';

const ChatRoomListItem = ({room, handleClick}) => (
  <li className="nav-item" onClick={handleClick}>
    <a className="nav-link">
      {room.name}
    </a>
  </li>
);

export default ChatRoomListItem;
