import React from "react";
import { Route, Switch } from "react-router-dom";
import AppHeader from "../components/AppHeader";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Home from "../components/Home";
import CreateQuestion from "../components/CreateQuestion";
import LeaderBoard from "../components/LeaderBoard";
import NotFound from "../components/NotFound";
import Poll from "../components/Poll";

const HomePage = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/login" />;

  return (
    <main>
      <div className="inner">
        <AppHeader />
        <section className="page-section">
          <Switch>
            <Route exact path="/home/add-question" component={CreateQuestion} />
            <Route exact path="/home/leader-board" component={LeaderBoard} />
            <Route exact path="/home/poll/:id" component={Poll} />
            <Route path="/home" component={Home} />
            <Route exact path="/home/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </section>
      </div>
    </main>
  );
};
const mapStateToProps = ({ auth }) => ({
  isAuthenticated: auth.active,
});

export default connect(mapStateToProps)(HomePage);
