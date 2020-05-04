import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/Login";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
