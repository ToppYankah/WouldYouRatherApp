import React, { useState, useEffect } from "react";
import { getAllUsers } from "../actions/users";
import { Login } from "../actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoginPage = ({ getAllUsers, users, auth, Login }) => {
  const [selectedUser, setSelectedUser] = useState({});
  const [alertError, setAlertError] = useState({ active: false, message: "" });
  const [placeholder, setPlaceholder] = useState("Select User");
  const [openUsersList, setOpenUsersList] = useState(false);

  useEffect(() => {
    getAllUsers();
  });

  const callAlert = (message) => {
    setAlertError({ active: true, message });
    setTimeout(() => setAlertError({ active: false, message: "" }), 3000);
  };

  const selectUser = ({ currentTarget }) => {
    const id = currentTarget.id;
    setSelectedUser(users[id]);
    setPlaceholder(users[id].name);
    setOpenUsersList(false);
  };

  const handleSubmit = () => {
    if (Object.keys(selectedUser).length > 0) Login(selectedUser);
    else callAlert("Please select a user");
  };

  if (auth.active) {
    return <Redirect to="/home" />;
  }

  return (
    <div className="login-board center">
      <div className="intro">
        <h2>Welcome to Would You Rather App</h2>
      </div>
      <div className="inner">
        <div className="form center">
          <h2 className="title">SIGN IN</h2>
          <div className="error-box">
            <span>{alertError.active && alertError.message}</span>
          </div>
          <div className={`user-selector ${openUsersList && "selected"}`}>
            <p
              onClick={() => setOpenUsersList(!openUsersList)}
              className="placeholder"
            >
              {placeholder} <i>&darr;</i>
            </p>
            <div className={`users-list ${openUsersList ? "show" : ""}`}>
              {Object.keys(users).map((key) => {
                const user = users[key];
                return (
                  <div
                    onClick={selectUser}
                    key={user.id}
                    id={user.id}
                    className="user"
                  >
                    <img src={user.avatarURL} alt="" />
                    <span className="name">{user.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
          <button onClick={handleSubmit} className="stretch">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getAllUsers: () => dispatch(getAllUsers()),
  Login: (user) => dispatch(Login(user)),
});

const mapStateToProps = ({ users, auth }) => ({
  users,
  auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
