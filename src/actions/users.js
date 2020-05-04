import * as DB from "../_DATA";
import { FETCH_USERS, UPDATE_USER_DATA } from "./types";

export const getAllUsers = () => (dispatch) => {
  DB._getUsers().then((users) => {
    Object.keys(users).forEach((id) => {
      const user = users[id];
      users[id].score =
        user.questions.length + Object.keys(user.answers).length;
    });

    dispatch({
      type: FETCH_USERS,
      payload: users,
    });
  });
};

export const updateUserScore = (user) => (dispatch) => {
  user.score += 1;

  dispatch({
    type: UPDATE_USER_DATA,
    payload: user,
  });
};

export const updateUserAnswers = (user, answer) => (dispatch) => {
  user.answers = {
    ...user.answers,
    [answer.questionId]: answer.selectedOption,
  };

  dispatch({
    type: UPDATE_USER_DATA,
    payload: user,
  });
};
