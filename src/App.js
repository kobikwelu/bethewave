import React, { Component } from 'react';
import './App.css';
import BodyContent from './BodyContent'
import AddCaptain from './AddCaptain'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Coming soon.....</h1>
        </header>
        <p className="App-intro">
        </p>
        <BodyContent />
        <AddCaptain />
      </div>
    );
  }
}

export default App;
