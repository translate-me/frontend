import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../Utils/history";
import NotFoundRoute from "./NotFoundRoute";
import AuthorizedRoute from "./AuthorizedRoute";
import HomepageAuthor from "../Screens/HomepageAuthor";
import Login from '../Screens/Login';
import TextSubmission from '../Screens/TextSubmission';
import TextEditor from '../Screens/TextEditor';
import Registration from '../Screens/Registration';


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
        <AuthorizedRoute exact path="/text_submission" component={TextSubmission} />
        <AuthorizedRoute exact path="/text_editor" component={TextEditor} />
        <Route exact path="/register" component={Registration} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>)
  }
};
