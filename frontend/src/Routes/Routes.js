import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../Utils/history";
import NotFoundRoute from "./NotFoundRoute";
import AuthorizedRoute from "./AuthorizedRoute";
import HomepageAuthor from "../Screens/HomepageAuthor";
import Login from '../Screens/Login';

export default class Routes extends React.Component {
  render() {
    return (<Router history={history}>
      <Switch>
        <AuthorizedRoute
          permission="allow_any"
          exact
          path="/"
          component={HomepageAuthor}
       />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>)
  }
};
