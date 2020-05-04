import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

const AppHeader = ({ user, onLogout }) => {
  return (
    <header>
      <div className="title">
        <h2 className="logo">Would You Rather App</h2>
      </div>
      <div className="row">
        <nav>
          <NavLink exact to="/home">
            Home
          </NavLink>
          <NavLink to="/home/add-question">New Question</NavLink>
          <NavLink to="/home/leader-board">Leader Board</NavLink>
        </nav>
        <div className="auth">
          <span>{user.name}</span>
          <span
            className="logout-btn"
            style={{ cursor: "pointer" }}
            onClick={onLogout}
          >
            Logout
          </span>
        </div>
      </div>
    </header>
  );
};

const mapStateToProp = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProp)(AppHeader);
