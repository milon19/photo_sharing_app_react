import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./app/components/privateRoute";
import Home from "./app/containers/Home";
import Auth from "./app/containers/Auth";
import UserProfile from "./app/containers/UserProfile";

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/:formType/:id?" component={Auth} exact />
        <Route path="/" component={Home} exact />
        <PrivateRoute path="/profile/:type?" component={UserProfile} exact />
      </Switch>
    </Router>
  );
};

export default RouteApp;
