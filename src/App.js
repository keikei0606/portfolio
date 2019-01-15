import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Atrae from './Atrae';
import Face from './Face';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          < Face/>
          < Atrae />

        </header>
      </div>
    );
  }
}

export default App;
