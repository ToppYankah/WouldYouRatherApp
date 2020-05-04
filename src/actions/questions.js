import { FETCH_QUESTIONS, ADD_NEW_QUESTION } from "./types";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../_DATA";

const categorizeQuestions = (questions, userId) => {
  const allQuestions = [];
  const answeredQuestions = [];
  const unansweredQuestions = [];

  Object.keys(questions).forEach((key) => {
    const question = questions[key];
    const voters = question.optionOne.votes.concat(question.optionTwo.votes);

    // percentage check
    questions[key].optionOne.percentage = Math.round(
      (questions[key].optionOne.votes.length / 3) * 100
    );
    questions[key].optionTwo.percentage = Math.round(
      (questions[key].optionTwo.votes.length / 3) * 100
    );

    // vote check
    if (voters.includes(userId)) answeredQuestions.push(question);
    else unansweredQuestions.push(question);

    allQuestions.push(question);
  });
  return {
    allQuestions,
    answeredQuestions,
    unansweredQuestions,
  };
};

export const getAllQuestions = (userId) => (dispatch) => {
  _getQuestions().then((questions) => {
    const result = categorizeQuestions(questions, userId);
    dispatch({
      type: FETCH_QUESTIONS,
      payload: {
        all: result.allQuestions,
        answered: result.answeredQuestions,
        unanswered: result.unansweredQuestions,
      },
    });
  });
};

export const saveQuestionAnswer = (authedUser, qid, answer) => (dispatch) => {
  _saveQuestionAnswer({ authedUser, qid, answer }).then((questions) => {
    const result = categorizeQuestions(questions, authedUser);
    dispatch({
      type: FETCH_QUESTIONS,
      payload: {
        all: result.allQuestions,
        answered: result.answeredQuestions,
        unanswered: result.unansweredQuestions,
      },
    });
  });
};

export const createQuestion = (question) => (dispatch) => {
  _saveQuestion(question).then((result) => {
    dispatch({
      type: ADD_NEW_QUESTION,
      payload: result,
    });
  });
};
