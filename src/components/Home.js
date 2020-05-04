import React, { useState } from "react";
import { connect } from "react-redux";
import Unanswered from "./Unanswered";
import Answered from "./Answered";
import { Link } from "react-router-dom";

const Home = ({ questions }) => {
  const [tab, setTab] = useState(0);

  const tabs = [
    <Unanswered questions={questions.unanswered} />,
    <Answered questions={questions.answered} />,
  ];

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

export default connect(mapStateToProps)(Home);
