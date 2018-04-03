import { userConstants } from '../constants/';

const accessToken = JSON.parse(localStorage.getItem('accessToken'));
const initialState = {
  data: null,
  accessToken: accessToken ? accessToken : null,
};

export const user = (state = initialState, action) => {
  switch (action.type) {
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        accessToken: action.accessToken,
      };
    case userConstants.LOGOUT:
      return {
        ...state,
        data: null,
        accessToken: null,
      };
    default:
      return state
  };
}
