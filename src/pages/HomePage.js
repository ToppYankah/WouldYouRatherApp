import React, {useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import CreateQuestion from "../components/CreateQuestion";
import LeaderBoard from "../components/LeaderBoard";
import NotFound from "../components/NotFound";
import Poll from "../components/Poll";
import {SAVE_INTENDED_URL} from '../actions/types';
import { Logout } from "../actions/auth";
import { getAllQuestions } from "../actions/questions";

const HomePage = ({ isAuthenticated, user, saveIntendedUrl, location, history, Logout, getAllQuestions }) => {
  useEffect(() => {
    getAllQuestions(user.id);
  });
  
  if (!isAuthenticated){
    saveIntendedUrl(location.pathname);
    return <Redirect to="/login" />
  }
  
  const handleLogout = ()=>{
    Logout();
    history.push("/login");
  }

  return (
    <main>
      <div className="inner">
        <AppHeader onLogout={handleLogout} />
        <section className="page-section">
          <Switch>
            <Route exact path="/home/add-question" component={CreateQuestion} />
            <Route exact path="/home/leader-board" component={LeaderBoard} />
            <Route exact path="/home/poll/:id" component={Poll}/>
            <Route exact path="/home/not-found" component={NotFound} />
            <Route path="/home" component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </section>
      </div>
    </main>
  );
};
const mapStateToProp = ({ auth }) => ({
  isAuthenticated: auth.active,
  user: auth.user
});

const mapDispatchToProp = dispatch => ({
  saveIntendedUrl: (path)=> dispatch({type: SAVE_INTENDED_URL, payload: path}),
  Logout: ()=>dispatch(Logout()),
  getAllQuestions: (user) => dispatch(getAllQuestions(user)),
})

export default connect(mapStateToProp, mapDispatchToProp)(HomePage);
