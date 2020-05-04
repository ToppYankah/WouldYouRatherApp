import React from "react";
import { connect } from "react-redux";
import PositionCard from "./PositionCard";

const LeaderBoard = ({ users }) => {
  const rank = () => {
    const result = [];
    Object.keys(users).forEach((id) => result.push(users[id]));
    return result.sort((a, b) => b.score - a.score);
  };

  return (
    <div className="leader-board">
      {rank().map((user) => (
        <PositionCard key={user.id} detail={user} />
      ))}
    </div>
  );
};

const mapStateToProp = ({ users }) => ({
  users,
});

export default connect(mapStateToProp)(LeaderBoard);
