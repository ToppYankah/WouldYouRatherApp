import React, { useState } from "react";
import { createQuestion } from "../actions/questions";
import { connect } from "react-redux";
import { updateUserScore } from "../actions/users";

const CreateQuestion = ({ user, createQuestion, updateUserScore }) => {
  const [question, setQuestion] = useState({
    optionOneText: "",
    optionTwoText: "",
    author: user.id,
  });

  const clearFields = () => {
    setQuestion({
      ...question,
      optionOneText: "",
      optionTwoText: "",
    });
  };

  const submitQuestion = () => {
    const { optionOneText, optionTwoText } = question;
    if (optionOneText && optionTwoText) {
      createQuestion(question);
      updateUserScore(user);
      clearFields();
    }
  };

  return (
    <div className="createForm">
      <h1>Create New Question</h1>
      <small>Complete the question</small>
      <h3>Would you rather...</h3>
      <input
        value={question.optionOneText}
        onChange={({ target }) =>
          setQuestion({ ...question, optionOneText: target.value })
        }
        placeholder="Option 1"
        type="text"
      />
      <div className="seperator row">
        <hr /> <span>OR</span> <hr />
      </div>
      <input
        value={question.optionTwoText}
        onChange={({ target }) =>
          setQuestion({ ...question, optionTwoText: target.value })
        }
        placeholder="Option 2"
        type="text"
      />
      <button onClick={submitQuestion} className="stretch">
        Submit
      </button>
    </div>
  );
};

const mapDispatchToProp = (dispatch) => ({
  createQuestion: (question) => dispatch(createQuestion(question)),
  updateUserScore: (user) => dispatch(updateUserScore(user)),
});

const mapStateToProp = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProp, mapDispatchToProp)(CreateQuestion);
