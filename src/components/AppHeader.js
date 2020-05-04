import React from "react";
import { NavLink } from "react-router-dom";
import { Logout } from "../actions/auth";
import { connect } from "react-redux";

const AppHeader = ({ Logout, user }) => {
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
            onClick={() => Logout()}
          >
            Logout
          </span>
        </div>
      </div>
    </header>
  );
};

const mapDispatchToProp = (dispatch) => ({
  Logout: () => dispatch(Logout()),
});

const mapStateToProp = ({ auth: { user } }) => ({
  user,
});

export default connect(mapStateToProp, mapDispatchToProp)(AppHeader);
