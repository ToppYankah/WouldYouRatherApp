import React from "react";

const PositionCard = ({ detail }) => {
  return (
    detail && (
      <div className="place-card">
        <div className="img-box">
          <img
            src={detail.avatarURL}
            width="120"
            height="120"
            alt={detail.name}
          />
        </div>
        <div className="details">
          <h2 className="name">{detail.name}</h2>
          <div className="points">
            <div>
              <span>Answered questions</span>
              <span>{Object.keys(detail.answers).length}</span>
            </div>
            <hr />
            <div>
              <span>Created questions</span>
              <span>{detail.questions.length}</span>
            </div>
          </div>
        </div>
        <div className="score">
          <h5>Score</h5>
          <div className="count">{detail.score}</div>
        </div>
      </div>
    )
  );
};

export default PositionCard;
