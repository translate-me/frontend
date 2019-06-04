import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from "redux-thunk";
import { Provider } from 'react-redux'
import reducers from "./Reducers/index";
import Routes from "./Routes/Routes";

const store = createStore(reducers, applyMiddleware(thunk))

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
