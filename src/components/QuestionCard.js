import React, { useState } from "react";
import { connect } from "react-redux";
import { saveQuestionAnswer } from "../actions/questions";
import { updateUserScore, updateUserAnswers } from "../actions/users";

const QuestionCard = ({
  saveAnswer,
  user,
  author,
  question,
  updateUserScore,
  updateUserAnswers,
}) => {
  const [selectedOption, setSelectedOption] = useState("");

  const selectOption = ({ target }) => setSelectedOption(target.id);

  const chooseAnswer = () => {
    if (selectedOption) {
      saveAnswer(user.id, question.id, selectedOption);
      updateUserScore(user);
      updateUserAnswers(user, { questionId: question.id, selectedOption });
    }
  };

  return (
    <div className="question">
      <div className="header">
        <span>{author.name} asks:</span>
      </div>
      <div className="user-img center">
        <img src={author.avatarURL} alt={author.name} />
      </div>
      <div className="body">
        <h2>Would you rather...</h2>
        <label htmlFor="optionOne">
          <input
            type="radio"
            onClick={selectOption}
            id="optionOne"
            name="option"
            className="answer-checker"
          />
          {question.optionOne.text}
        </label>

        <div className="seperator row">
          <hr /> <span>OR</span> <hr />
        </div>

        <label htmlFor="optionTwo">
          <input
            type="radio"
            onClick={selectOption}
            id="optionTwo"
            name="option"
            className="answer-checker"
          />
          {question.optionTwo.text}
        </label>
        <button onClick={chooseAnswer} id={question.id}>
          Submit
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  saveAnswer: (userId, questionId, answer) =>
    dispatch(saveQuestionAnswer(userId, questionId, answer)),
  updateUserScore: (user) => dispatch(updateUserScore(user)),
  updateUserAnswers: (user, answer) =>
    dispatch(updateUserAnswers(user, answer)),
});

const mapStateToProps = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProps, mapDispatchToProps)(QuestionCard);
