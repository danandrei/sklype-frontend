import { chatConstants } from '../constants';

const initialState = {
  rooms: [],
  selectedRoom: null,
  messages: [],
  ui: {
    sidebarFormVisible: false,
  }
};

export const chat = (state = initialState, action) => {
  switch (action.type) {
    case chatConstants.FETCH_CHAT_ROOMS_SUCCESS:
      return {
        ...state,
        rooms: action.payload.data.data,
      }
    case chatConstants.SHOW_SIDEBAR_FORM:
      return {
        ...state,
        ui: {
          sidebarFormVisible: true
        }
      };
    case chatConstants.HIDE_SIDEBAR_FORM:
      return {
        ...state,
        ui: {
          sidebarFormVisible: false
        }
      }
    case chatConstants.CREATE_CHAT_ROOM_SUCCESS:
      const room = action.payload.data.data
      return {
        ...state,
        rooms: [...state.rooms, room]
      }
    case chatConstants.SELECT_CHAT_ROOM:
      return {
        ...state,
        selectedRoom: action.room,
      }
    case chatConstants.FETCH_ROOM_MESSAGES_SUCCESS:
      return {
        ...state,
        messages: action.payload.data.data.reverse(),
      }
    case chatConstants.WS_NEW_ROOM_MESSAGE:
      const message = action.message;
      if (message.room === state.selectedRoom) {
        return {
          ...state,
          messages: [...state.messages, message]
        }
      } else {
        return state;
      }
    default:
      return state;
  };
}
