import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import './Bar.css';

import Screen from './Screen';
import Button from './Button';
import Bar from './Bar';

//add logic to check if ur logged in

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      food: 4,
      poop: 3,
      love: 5,
      health: 0,
      mood: "tama"
     };
  }

  updateHealth() {
    let food = this.state.food;
    let poop = this.state.poop;
    let love = this.state.love;

    let newHealth = Math.round(love*food*(5 - poop)/25);
    this.setState({ health: newHealth });

    if (newHealth < 3) {
      this.setState({ mood: "sad" });
    }

  }

  changeState(state, n) {      //This is horrendous
    if (state == "poop")
    {
      let newValue = this.state.poop - n;    //Animation and number of poops won't update, even though state does
      if (newValue > 5) {newValue = 5;}
      if (newValue < 0) {newValue = 0;}
      this.setState({ poop: newValue });
      console.log(this.state.poop);
    }
    if (state == "happy")
    {
      let newValue = this.state.love + n;
      if (newValue > 5) {newValue = 5;}
      if (newValue < 0) {newValue = 0;}
      this.setState({ love: newValue });
      console.log(this.state.love);
    }
    if (state == "eating")
    {
      let newValue = this.state.food + n;
      if (newValue > 5) {newValue = 5;}
      if (newValue < 0) {newValue = 0;}
      this.setState({ food: newValue });
      console.log(this.state.food);
    }

    this.updateHealth();
  }

  btnPress(newMood) {
    console.log(newMood);
    this.setState({ mood: newMood });
    this.changeState(newMood, 1);

  }

  componentWillMount() {
    this.updateHealth()
  }

  render() {
    return (
      <div className="App">
        <div id="device">
          <div id="bars">
              <Bar id="health" n_lights={this.state.health} img1="./pics/dead_icon.png" img2="./pics/smile_icon.png"/>
              <Bar id="food" n_lights={this.state.food} img1="./pics/starve_icon.png" img2="./pics/full_icon.png"/>
          </div>
          <img id="egg_border" src="./pics/egg_border.png"/>
          <Screen poop={this.state.poop} mood={this.state.mood} />
          <div id="buttons">
            <Button id="poop" pic="./pics/poop_btn.svg" onClick={this.btnPress.bind(this)}/>
            <Button id="happy" pic="./pics/heart_btn.svg" onClick={this.btnPress.bind(this)}/>
            <Button id="eating" pic="./pics/food_btn.svg" onClick={this.btnPress.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
