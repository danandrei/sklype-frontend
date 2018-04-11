import { socketConstants, chatConstants } from '../constants';

const init = (accessToken) => (dispatch, getState) => {
  window.WebSocket = window.WebSocket || window.MozWebSocket;

  // if browser doesn't support WebSocket, just show some notification and exit
  if (!window.WebSocket) {
    alert('No WS support');
    return;
  }

  const connection = new WebSocket(socketConstants.HOST);

  connection.onopen = () => {
    console.log('connected!');

    // authorize the connection
    let message = {
      name: 'auth',
      data: {
        accessToken: accessToken,
      },
    };
    connection.send(JSON.stringify(message));
  }

  connection.onerror = (error) => {
    console.error(error);
  }

  connection.onmessage = (message) => {
    let data = message.data;

    try {
      data = JSON.parse(data);
    } catch (e) {
      return console.error(new Error('Failed to decode websocket message'));
    }

    switch (data.name) {
      case 'error':
        return console.error(new Error(data.error));
      case 'chat_message':
        return dispatch({
          type: chatConstants.WS_NEW_ROOM_MESSAGE,
          message: data.data.message,
        });
      default:
        break;
    }
  }
};

export const socketActions = {
  init,
};
