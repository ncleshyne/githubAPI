import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import GitHub from './api.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div>
          <GitHub username="ncleshyne"></GitHub>
        </div>
      </div>
    );
  }
}

export default App;
