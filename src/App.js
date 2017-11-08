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
            <div id="health_bar">
              <img class="bar_icon" src="./pics/dead_icon.png"/>
              <img class="bar_icon" src="./pics/smile_icon.png"/>
            </div>
            <div id="food_bar">
              <img class="bar_icon" src="./pics/starve_icon.png"/>
              <img class="bar_icon" src="./pics/full_icon.png"/>
            </div>
          </div>
          <img id="egg_border" src="./pics/egg_border.png"/>
          <Screen mood="happy" />
          <div id="buttons">
            <Button id="poop" pic="./pics/poop_btn.svg" />
            <Button id="heart" pic="./pics/heart_btn.svg"/>
            <Button id="food" pic="./pics/food_btn.svg"/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
