import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './Screens/LandingPage';
import TextSubmission from './Screens/TextSubmission';
import TextEditor from './Screens/TextEditor';
import Registration from './Screens/Registration';
import Breakpoints from './Screens/Breakpoints';
import FollowTranslation from './Screens/FollowTranslations';
import WhoAreWe from './Screens/WhoAreWe';
import WhoAreWe from './Screens/HowItWorks';


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
      <Route exact path="/follow_translations" component={FollowTranslation} />
      <Route exact path="/meet_us" component={WhoAreWe} />
      <Route exact path="/how_it_works" component={HowItWorks} />
    </div>
  </Router>
);
export default App;
