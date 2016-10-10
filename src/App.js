import React, { Component } from 'react';

import './App.css';
var Header = require('./Header.js')
var MainContainer = require('./MainContainer.js')

class App extends Component {
  render() {
    return (
      <div className="App">


        <Header />
        <MainContainer />

      </div>
    );
  }
}

export default App;
