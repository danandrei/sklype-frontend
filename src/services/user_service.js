import { apiConstants } from '../constants/';

const login = (username, password) => {


}

const logout = () => {
  localStorage.removeItem('user');
};

export const userService = {
  login,
  logout,
};
