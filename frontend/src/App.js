import React, { Component } from 'react';
import Registration from './Screens/Registration';
import HomepageAuthor from './Screens/HomepageAuthor'
import Login from './Screens/Login';

class App extends Component {
  render() {
    return(
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link href="https://fonts.googleapis.com/css?family=Nixie+One|Raleway" rel="stylesheet"/>
        <Login/>
        {/* <Registration/> */}
        {/* <HomepageAuthor /> */}
      </div>
    );
  }
}
export default App;
