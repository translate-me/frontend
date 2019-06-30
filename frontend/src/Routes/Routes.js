import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../Utils/history";
import NotFoundRoute from "./NotFoundRoute";
import AuthorizedRoute from "./AuthorizedRoute";
import Login from '../Screens/Login';
import LandingPage from '../Screens/LandingPage';
import TextSubmission from '../Screens/TextSubmission';
import SubmitTextInformation from '../Screens/SubmitTextInformation';
import TextEditor from '../Screens/TextEditor';
import Registration from '../Screens/Registration';
import Breakpoints from '../Screens/Breakpoints';
import Profile from '../Screens/Profile';
import FollowTranslation from '../Screens/FollowTranslations';
import WhoAreWe from '../Screens/WhoAreWe';
import HowItWorks from '../Screens/HowItWorks';
import TranslatorSignUp from '../Screens/TranslatorSignUp';


export default class Routes extends React.Component {
  render() {
    return (<Router history={history}>
      <Switch>
        <AuthorizedRoute
          permission="allow_any"
          exact
          path="/"
          component={LandingPage}
         />
        <AuthorizedRoute exact path="/homepage_author" component={FollowTranslation} />
        <AuthorizedRoute exact path="/meet_us" component={WhoAreWe} />
        <AuthorizedRoute exact path="/how_it_works" component={HowItWorks} />
        <AuthorizedRoute exact path="/profile" component={Profile} />
        <AuthorizedRoute exact path="/translator_sign_in" component={TranslatorSignUp} />
        <AuthorizedRoute exact path="/text_submission" component={TextSubmission} />
        <AuthorizedRoute exact path="/text_information" component={SubmitTextInformation} />
        <AuthorizedRoute exact path="/text_editor" component={TextEditor} />
        <Route exact path="/register" component={Registration} />
        <AuthorizedRoute exact path="/breakpoints" component={Breakpoints} />
        <AuthorizedRoute exact path="/profile" component={Profile} />
        <AuthorizedRoute exact path="/follow_translations" component={FollowTranslation} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundRoute} />
      </Switch>
    </Router>)
  }
};
