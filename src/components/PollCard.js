import React from "react";
import { Link } from "react-router-dom";

const PollCard = ({ author, question }) => {
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
        <label className="hint">
          {question.optionOne.text.substr(0, 20)}...
        </label>
        <Link to={`/home/poll/${question.id}`} className="button outline">
          View Poll
        </Link>
      </div>
    </div>
  );
};

export default PollCard;
