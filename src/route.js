import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./app/containers/Home";
import Auth from "./app/containers/Auth";

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/:formType/:id?" component={Auth} exact />
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default RouteApp;
