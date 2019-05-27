import React, { Component } from 'react';
import HomepageAuthor from './Screens/HomepageAuthor';

class App extends Component {
  render() {
    return(
        <Router>
            <Route path="/" exact component={HomepageAuthor} />
            {/* <Route path="/about/" component={About} />
            <Route path="/users/" component={Users} /> */}
        </Router>
    );
  }
}
export default App;
