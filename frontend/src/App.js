import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { Component } from 'react';
import NavBar from './Components/NavBar';
import HomepageAuthor from './Screens/HomepageAuthor';
import TextSubmission from './Screens/TextSubmission';
import TextEditor from './Screens/TextEditor';
import Registration from './Screens/Registration';
import TranslatorSignUp from './Screens/TranslatorSignUp';

export const App = () => {
    return (
      <Router>
        <div>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossOrigin="anonymous"
          />
          <link href="https://fonts.googleapis.com/css?family=Nixie+One|Raleway" rel="stylesheet" />
          <Route exact path="/" component={HomepageAuthor} />
          <Route exact path="/text_submission" component={TextSubmission} />
          <Route exact path="/text_editor" component={TextEditor} />
          <Route exact path="/register" component={Registration} />
          <Route exact path="/translator_sign_in" component={TranslatorSignUp} />
        </div>
      </Router>
    )
}
export default App;
