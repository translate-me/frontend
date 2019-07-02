import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { isAuthenticated } from "./services/auth";
import Login from '../Screens/Login';
import LandingPage from '../Screens/LandingPage';
import TextSubmission from '../Screens/TextSubmission';
import TextEditor from '../Screens/TextEditor';
import Registration from '../Screens/Registration';
import Breakpoints from '../Screens/Breakpoints';
import FollowTranslation from '../Screens/FollowTranslations';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <PrivateRoute exact path="/text_submission" component={TextSubmission} />
      <PrivateRoute exact path="/text_editor" component={TextEditor} />
      <Route exact path="/register" component={Registration} />
      <PrivateRoute exact path="/breakpoints" component={Breakpoints} />
      <PrivateRoute exact path="/text_information" component={SubmitTextInformation} />
      <PrivateRoute exact path="/homepage_author" component={FollowTranslation} />
      <Route exact path="/meet_us" component={WhoAreWe} />
      <Route exact path="/how_it_works" component={HowItWorks} />
      <PrivateRoute exact path="/homepage_translator" component={HomepageTranslator} />
      <PrivateRoute exact path="/revision" component={Revision} />
      <PrivateRoute exact path="/translator_sign_in" component={TranslatorSignUp} />
      <Route exact path="/login" component={Login} />
      <PrivateRoute exact path="/finished_text" component={FinishedText} />
      <PrivateRoute exact path="/payment" component={Payment} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
