import React, { Component } from 'react';
// import HomepageAuthor from './Screens/HomepageAuthor';
import NavBar from './Components/NavBar'
import TextEditor from './Screens/TextEditor'

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
        <NavBar />
        <TextEditor />
      </div>
    );
  }
}
export default App;
