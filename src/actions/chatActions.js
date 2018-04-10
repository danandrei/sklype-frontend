import { history } from '../helpers';
import { chatConstants } from '../constants';

const fetchRooms = () => {
  return {
    type: chatConstants.FETCH_CHAT_ROOMS,
    payload: {
      request: {
        method: 'GET',
        url: '/chat/rooms'
      }
    }
  }
}

const hideSidebarForm = () => {
  return {
    type: chatConstants.HIDE_SIDEBAR_FORM,
  }
};

const showSidebarForm = () => {
  return {
    type: chatConstants.SHOW_SIDEBAR_FORM
  }
};

const createChatRoom = (data) => {
  return {
    type: chatConstants.CREATE_CHAT_ROOM,
    payload: {
      request: {
        method: 'POST',
        url: '/chat/rooms',
        data: data
      }
    }
  }
}

const selectChatRoom = (room) => {
  return {
    type: chatConstants.SELECT_CHAT_ROOM,
    room: room,
  }
};

export const chatActions = {
  fetchRooms,
  hideSidebarForm,
  showSidebarForm,
  createChatRoom,
  selectChatRoom,
};
