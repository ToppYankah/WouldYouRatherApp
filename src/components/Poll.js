import React from "react";
import { connect } from "react-redux";
import QuestionCard from "./QuestionCard";
import ResultCard from "./ResultCard";

const Poll = ({ match, users, user, questions }) => {
  const questionId = match.params.id;
  const question = questions.filter(
    (question) => question.id === questionId
  )[0];
  const author =
    users[Object.keys(users).filter((user) => user === question.author)[0]];
  const hasAnswered = Object.keys(user.answers).includes(question.id);
  const selectedOption = hasAnswered && user.answers[question.id];

  return (
    <div>
      {hasAnswered && (
        <ResultCard
          selectedOption={selectedOption}
          author={author}
          question={question}
        />
      )}
      {!hasAnswered && <QuestionCard author={author} question={question} />}
    </div>
  );
};

const mapStateToProps = ({ questions, users, auth: { user } }) => ({
  questions: questions.all,
  users,
  user,
});

export default connect(mapStateToProps)(Poll);
