import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from "react-router-dom";
import { SignupForm } from "./modules/user-management/Signup";
import { Login } from "./modules/user-management/Login";

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <App />
      </Route>
      <Route path="/signup">
        <SignupForm />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);
