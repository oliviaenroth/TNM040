import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Screen from './Screen';
import Button from './Button';

class App extends Component {

  constructor(props){
    super(props)
    this.state = { 
      mood: "happy"
     };
  }

  changeMood(newMood) {
    this.setState({ mood: newMood });
    console.log(this.state.mood);
  }

  render() {
    return (
      <div className="App">
        <div id="device">
          <div id="bars">
            <div id="health_bar">
              <img className="bar_icon" src="./pics/dead_icon.png"/>
              <img className="bar_icon" src="./pics/smile_icon.png"/>
            </div>
            <div id="food_bar">
              <img className="bar_icon" src="./pics/starve_icon.png"/>
              <img className="bar_icon" src="./pics/full_icon.png"/>
            </div>
          </div>
          <img id="egg_border" src="./pics/egg_border.png"/>
          <Screen mood={this.state.mood} />
          <div id="buttons">
            <Button id="poop" pic="./pics/poop_btn.svg" onClick={this.changeMood.bind(this)}/>
            <Button id="heart" pic="./pics/heart_btn.svg" onClick={this.changeMood.bind(this)}/>
            <Button id="food" pic="./pics/food_btn.svg" onClick={this.changeMood.bind(this)}/>
          </div>

        </div>

      </div>
    );
  }
}

export default App;
