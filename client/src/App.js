import React, { Component } from 'react';
import NavBar from './components/NavBar.js';
import * as frontPageConstants from './data/frontpage.js';

class App extends Component {
  render() {
    return (
      <NavBar links={frontPageConstants.LINKS}/>
    );
  }
}

export default App;
