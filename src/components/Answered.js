import React from "react";
import { connect } from "react-redux";
import PollCard from "./PollCard";

const Answered = ({ questions, users }) => {
  return (
    <div>
      {questions &&
        questions.map((question) => {
          const author =
            users[
              Object.keys(users).filter((user) => user === question.author)[0]
            ];
          return (
            <PollCard key={question.id} author={author} question={question} />
          );
        })}
    </div>
  );
};

const mapStateToProps = ({ auth, users }) => ({
  user: auth.user,
  users,
});

export default connect(mapStateToProps)(Answered);
