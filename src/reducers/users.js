import { FETCH_USERS, UPDATE_USER_DATA } from "../actions/types";

const initialState = {};

export function users(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_USERS:
      return payload;

    case UPDATE_USER_DATA:
      return {
        ...state,
        [payload.id]: payload,
      };

    default:
      return state;
  }
}
