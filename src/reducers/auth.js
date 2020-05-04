import { LOGIN_USER, LOGOUT_USER, UPDATE_USER_DATA, SAVE_INTENDED_URL } from "../actions/types";

const initialState = {
  active: false,
  intendedUrl: "",
  user: {},
};

export function auth(state = initialState, { type, payload }) {
  switch (type) {
    case LOGIN_USER:
      return {
        active: true,
        user: payload,
      };

    case UPDATE_USER_DATA:
      return {
        ...state,
        user: payload,
      };

    case LOGOUT_USER:
      return {
        active: false,
        user: {},
        intendedUrl: ""
      };

    case SAVE_INTENDED_URL:
      return {
        ...state,
        intendedUrl: payload
      }

    default:
      return state;
  }
}
