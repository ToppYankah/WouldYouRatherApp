import { LOGIN_USER, LOGOUT_USER } from "./types";

export const Login = (user) => (dispatch) => {
  dispatch({
    type: LOGIN_USER,
    payload: user,
  });
};

export const Logout = () => (dispatch) => {
  dispatch({
    type: LOGOUT_USER,
  });
};
