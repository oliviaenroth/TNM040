import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Screen from './Screen';
import Button from './Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="device">
          <div id="bars">
          </div>
          <Screen />
          <div id="buttons">
            <Button id="poop" pic="./pics/poop_btn.svg" />
          </div>

        </div>
        
      </div>
    );
  }
}

export default App;
