import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import { Link } from "react-router-dom";
import { getAllQuestions } from "../actions/questions";

const Home = ({ questions, user, getAllQuestions }) => {
  const [tab, setTab] = useState(0);

  const tabs = [
    <Unanswered questions={questions.unanswered} />,
    <Answered questions={questions.answered} />,
  ];

  useEffect(() => {
    getAllQuestions(user.id);
  });

  return (
    <div className="questions-list">
      <div className="tab row">
        <Link
          onClick={() => setTab(0)}
          className={`${tab === 0 ? "active" : ""}`}
          to="/home"
        >
          Unanswered Questions
        </Link>
        <Link
          onClick={() => setTab(1)}
          className={`${tab === 1 ? "active" : ""}`}
          to="/home"
        >
          Answered Questions
        </Link>
      </div>
      <div className="page">{tabs[tab]}</div>
    </div>
  );
};

const mapStateToProps = ({ auth: { user }, questions }) => ({
  questions,
  user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllQuestions: (user) => dispatch(getAllQuestions(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
