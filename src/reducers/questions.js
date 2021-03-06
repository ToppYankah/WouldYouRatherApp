import { FETCH_QUESTIONS, ADD_NEW_QUESTION } from "../actions/types";

const initialState = {};

export function questions(state = initialState, { type, payload }) {
  switch (type) {
    case FETCH_QUESTIONS:
      return payload;

    case ADD_NEW_QUESTION:
      return {
        [payload.id]: payload,
        ...state,
      };

    default:
      return state;
  }
}
