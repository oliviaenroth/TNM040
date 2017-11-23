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
      food: 3,
      poop: 0,
      love: 5,
      health: 0,
      mood: "tama",
      animation: "",
      soundIsPlaying: false,
      buttonIsPressed: false,
      poopInterval: 25000, // poop is not showing/ rendering or only showing 1 poop
      loveInterval: 30000,
      foodInterval: 21000
     };
  }

  updatePoop() {   //Continuous incrementing of poop
    this.changeState("poop", -1);
    this.playSound('./audio/poop.wav');
  }

  updateLove() {
    this.changeState("happy", -1);
  }

  updateFood() {
    this.changeState("eating", -1);
  }

  updateHealth() {
    let food = this.state.food;
    let poop = this.state.poop;
    let love = this.state.love;

    let newHealth = Math.round(love*food*(5 - poop)/25);
      //let newHealth = 0;
      this.setState({ health: newHealth });

    if (newHealth === 0) {
      this.playSound('./audio/death.wav');
    }
    else if (newHealth < 3) {
      this.setState({ mood: "sad" });
    }
    /*
    else if (newHealth === 5) {
      this.playSound('./audio/happy.wav');
    } */
    else {
      this.setState({mood: "tama"});
    }
      if(newHealth === 0){
      this.setState({mood: "dying"});
    }
  }

  changeState(state, n) {      //This is horrendous
    if (state === "poop")
    {
      let newValue = this.state.poop - n;    //Animation and number of poops won't update, even though state does
      if (newValue > 5) {newValue = 5;}
      if (newValue < 0) {newValue = 0;}
      this.setState({ poop: newValue });
      console.log(this.state.poop);
    }
    if (state === "happy")
    {
      let newValue = this.state.love + n;
      if (newValue > 5) {newValue = 5;}
      if (newValue < 0) {newValue = 0;}
      this.setState({ love: newValue });
      this.playSound('./audio/love.wav');
    }
    if (state === "eating")
    {
      let newValue = this.state.food + n;
      if (newValue > 5) {newValue = 5;}
      if (newValue < 0) {newValue = 0;}
      this.setState({ food: newValue });
    }

    this.updateHealth();
  }

  btnPress(newMood) {
    if (this.state.buttonIsPressed == false) {
      this.setState({ buttonIsPressed: true });
      this.setState({ animation: newMood });
      this.changeState(newMood, 1);
      setTimeout(function() { this.setState({ buttonIsPressed: false }); }.bind(this), 2500); //Wait 1 second before the button can be pressed again
    }
  }

  playSound(url){
    let sound = new Audio(url);

    if (this.state.health == 5) {
      let sound = new Audio('./audio/happy.wav');
    }
    if (this.state.soundIsPlaying == false) {
      this.setState({ soundIsPlaying: true});
      sound.play();
      sound.onended = function() {
        this.setState({ soundIsPlaying: false});
      }.bind(this)
    }
  }

  sadAlert() {
    if (this.state.mood === "sad") {
      this.playSound('./audio/alert_death.wav');
    }
  }

  componentWillMount() {
    this.updateHealth()
  }

  componentDidMount() {
    setInterval(this.sadAlert.bind(this), 3000);
    setInterval(this.updatePoop.bind(this), this.state.poopInterval);
    setInterval(this.updateLove.bind(this), this.state.loveInterval);
    setInterval(this.updateFood.bind(this), this.state.foodInterval);
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
          <Screen poop={this.state.poop} mood={this.state.mood} animation={this.state.animation} />
          <div id="buttons">
            <Button id="poop" isPressed={this.state.buttonIsPressed} pic="./pics/poop_btn.svg" pic_pressed="./pics/poop_btn_pressed.svg" onClick={this.btnPress.bind(this)}/>
            <Button id="happy" isPressed={this.state.buttonIsPressed} pic="./pics/heart_btn.svg" pic_pressed="./pics/heart_btn_pressed.svg" onClick={this.btnPress.bind(this)}/>
            <Button id="eating" isPressed={this.state.buttonIsPressed} pic="./pics/food_btn.svg" pic_pressed="./pics/food_btn_pressed.svg" onClick={this.btnPress.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
