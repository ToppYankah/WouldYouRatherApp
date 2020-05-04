import React from "react";

const QuestionCard = ({ selectedOption, author, question }) => {
  return (
    <div className="question">
      <div className="header">
        <span>{author.name} asks:</span>
      </div>
      <div className="user-img center">
        <img src={author.avatarURL} alt={author.name} />
      </div>
      <div className="body">
        <h2>Result:</h2>
        <div
          className={`optionbox ${selectedOption === "optionOne" && "select"}`}
        >
          <p className="option">Would you rather {question.optionOne.text}?</p>
          <div className="percentage-bar">
            <div
              style={{ width: `${question.optionOne.percentage}%` }}
              className="indicator"
            ></div>
            <span className="percentage-value">{question.optionOne.percentage}%</span>
          </div>
          <span>{question.optionOne.votes.length} out of 3 votes</span>
        </div>
        <div
          className={`optionbox ${selectedOption === "optionTwo" && "select"}`}
        >
          <p className="option"> Would you rather {question.optionTwo.text}?</p>
          <div className="percentage-bar">
            <div
              style={{ width: `${question.optionTwo.percentage}%` }}
              className="indicator"
            ></div>
            <span className="percentage-value">{question.optionTwo.percentage}%</span>
          </div>
          <span>{question.optionTwo.votes.length} out of 3 votes</span>
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
