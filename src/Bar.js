import React, { Component } from 'react';

import './Bar.css';

export default class bar extends Component {
  render() {
    let n_lights = this.props.n_lights;

    let lights = [];

    for (let i=0; i < n_lights; i++) {
      lights.push(<img className="light" key={"lightOn" + i} src='./pics/light_on.png' alt=""/>);
    }

    for (let i=0; i < (5-n_lights); i++) {
      lights.push(<img className="light" key={"lightOff" + i} src='./pics/light_off.png' alt=""/>);
    }

    return (
      <div className="bar">
        <img className="bar_icon" src={this.props.img1} alt="barIcon"/>
        {lights}
        <img className="bar_icon" src={this.props.img2} alt="barIcon"/>
      </div>
    )
  }
}
