import React, { Component } from 'react';
import './App.css';
import Header from './header';
import Atrae from './Atrae';
import Face from './Face';
import SNS from './SNS';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          < Header />
        </header>
        <div className="App-header">
          < Face />
          < SNS />
          < Atrae />
        </div>
        <div id="atrae">
        </div>
      </div>
    );
  }
}

export default App;
