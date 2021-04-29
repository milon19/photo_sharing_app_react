import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./app/containers/Home";

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </Router>
  );
};

export default RouteApp;
