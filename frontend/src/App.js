import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './Screens/LandingPage';
import TextSubmission from './Screens/TextSubmission';
import TextEditor from './Screens/TextEditor';
import Registration from './Screens/Registration';
import HomepageTranslator from './Screens/HomepageTranslator';
import Breakpoints from './Screens/Breakpoints';
import SubmitTextInformation from './Screens/SubmitTextInformation';
import FollowTranslation from './Screens/FollowTranslations';
import WhoAreWe from './Screens/WhoAreWe';
import HowItWorks from './Screens/HowItWorks';
import Revision from './Screens/Revision';
import TranslatorSignUp from './Screens/TranslatorSignUp';
import Login from './Screens/Login';

export const App = () => (
  <Router>
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
      <link href="https://fonts.googleapis.com/css?family=Nixie+One|Raleway" rel="stylesheet" />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/text_submission" component={TextSubmission} />
      <Route exact path="/text_editor" component={TextEditor} />
      <Route exact path="/register" component={Registration} />
      <Route exact path="/breakpoints" component={Breakpoints} />
      <Route exact path="/text_information" component={SubmitTextInformation} />
      <Route exact path="/homepage_author" component={FollowTranslation} />
      <Route exact path="/meet_us" component={WhoAreWe} />
      <Route exact path="/how_it_works" component={HowItWorks} />
      <Route exact path="/homepage_translator" component={HomepageTranslator} />
      <Route exact path="/revision" component={Revision} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/translator_sign_in" component={TranslatorSignUp} />
      <Route exact path="/login" component={Login} />
    </div>
  </Router>
);
export default App;
