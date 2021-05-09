import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./app/components/privateRoute";
import Home from "./app/containers/Home";
import Auth from "./app/containers/Auth";
import UserProfile from "./app/containers/UserProfile";
import AlbumDetails from "./app/containers/Albums";
import MyAlbumDetails from "./app/containers/MyAlbums";
import CreateAlbum from "./app/containers/CreateAlbum";

const RouteApp = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth/:formType/:id?" component={Auth} exact />
        <Route path="/" component={Home} exact />
        <Route path="/albums/:id" component={AlbumDetails} exact />
        <PrivateRoute path="/my-albums/:id" component={MyAlbumDetails} exact />
        <PrivateRoute path="/profile/:type?" component={UserProfile} exact />
        <PrivateRoute path="/create-album" component={CreateAlbum} exact />
      </Switch>
    </Router>
  );
};

export default RouteApp;
