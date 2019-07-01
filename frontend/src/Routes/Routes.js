import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import history from "../Utils/history";
import NotFoundRoute from "./NotFoundRoute";
import AuthorizedRoute from "./AuthorizedRoute";
import Login from '../Screens/Login';
import LandingPage from '../Screens/LandingPage';
import TextSubmission from '../Screens/TextSubmission';
import TextEditor from '../Screens/TextEditor';
import Registration from '../Screens/Registration';
import Breakpoints from '../Screens/Breakpoints';
import FollowTranslation from '../Screens/FollowTranslations';


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
        <AuthorizedRoute exact path="/text_submission" component={TextSubmission} />
        <AuthorizedRoute exact path="/text_editor" component={TextEditor} />
        <Route exact path="/register" component={Registration} />
        <AuthorizedRoute exact path="/breakpoints" component={Breakpoints} />
        <AuthorizedRoute exact path="/follow_translations" component={FollowTranslation} />
        <Route exact path="/login" component={Login} />
        <Route component={NotFoundRoute} />
        <Route exact path="/text_information" component={SubmitTextInformation} />
        <Route exact path="/homepage_author" component={FollowTranslation} />
        <Route exact path="/meet_us" component={WhoAreWe} />
        <Route exact path="/how_it_works" component={HowItWorks} />
        <Route exact path="/homepage_translator" component={HomepageTranslator} />
        <Route exact path="/revision" component={Revision} />
        <Route exact path="/translator_sign_in" component={TranslatorSignUp} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/finished_text" component={FinishedText} />
        <Route exact path="/payment" component={Payment} />



      </Switch>
    </Router>)
  }
};
