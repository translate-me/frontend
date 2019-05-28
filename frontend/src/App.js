import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import LandingPage from './Screens/LandingPage';
import TextSubmission from './Screens/TextSubmission';
import TextEditor from './Screens/TextEditor';
import Registration from './Screens/Registration';
import HomepageAuthor from './Screens/HomepageAuthor'
import Login from './Screens/Login';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducers from "./Reducers/index";
import Routes from "./Routes/Routes";

const store = createStore(reducers)

class App extends Component {
  render() {
    return(
      <Provider store={store}>
              <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Nixie+One|Raleway" rel="stylesheet"/>
        <Routes />
      </Provider>
    );
  }
}
export default App;
